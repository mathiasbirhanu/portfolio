import os
import subprocess
import re

REMOTE_URL = "https://github.com/mathiasbirhanu/portfolio.git"
BRANCH = "main"

def clean_feature_name(file_path):
    base_name = os.path.basename(file_path)
    name_without_ext = os.path.splitext(base_name)[0]
    clean_name = re.sub(r'[-_]', ' ', name_without_ext)
    clean_name = re.sub(r'([a-z])([A-Z])', r'\1 \2', clean_name)
    return clean_name.title()

# Collect safe files
files_to_commit = []
for root, dirs, files in os.walk("."):
    dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ['node_modules', 'venv', '__pycache__', 'dist', 'build']]
    for file in files:
        filepath = os.path.join(root, file)
        
        # Skip script itself and gitignored files
        if file == "push_features.py" or file.endswith(".log"):
            continue
            
        is_ignored = subprocess.run(["git", "check-ignore", filepath], capture_output=True).returncode == 0
        if not is_ignored:
            files_to_commit.append(filepath)

total = len(files_to_commit)
print(f"Found {total} safe feature files to push to mathiasbirhanu/car-rental-system...")

for index, filepath in enumerate(files_to_commit, start=1):
    feature_name = clean_feature_name(filepath)
    commit_message = f"feat({feature_name.lower().replace(' ', '-')}): implement {feature_name} module #{index}"
    
    # 1. Stage individual file
    add_res = subprocess.run(["git", "add", filepath], capture_output=True)
    if add_res.returncode != 0:
        continue

    # 2. Commit changes (safely catches if there's nothing new to commit)
    commit_res = subprocess.run(["git", "commit", "-m", commit_message], capture_output=True)
    if commit_res.returncode != 0:
        # Skip if nothing changed for this file
        continue
        
    # 3. Force push each commit individually to remote
    push_res = subprocess.run(["git", "push", "-u", "origin", BRANCH, "--force"], capture_output=True)
    if push_res.returncode != 0:
        print(f"[{index}/{total}] Warning: Push failed for {filepath}, continuing...")
        continue
    
    print(f"[{index}/{total}] Pushed: '{commit_message}'")

print("\nAll available feature commits processed and pushed successfully!")