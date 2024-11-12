import os
import re
from nanoid import generate

def update_permalink(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    permalink_pattern = re.compile(r'permalink: /(\w+)/(\w+)(/[\w\d]+)?/')
    new_lines = []
    for line in lines:
        match = permalink_pattern.search(line)
        if match:
            language, category, nanoid = match.groups()
            if language == 'en':
                # Only generate a new nanoid if the original permalink had one
                new_nanoid = generate(size=8) if nanoid else ''
                # Construct the new permalink with correct slashes
                if new_nanoid:
                    new_permalink = f'permalink: /zh-TW/{category}/{new_nanoid}/'
                else:
                    new_permalink = f'permalink: /zh-TW/{category}/'
                line = permalink_pattern.sub(new_permalink, line)
        new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(new_lines)

def traverse_and_update(root_dir):
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                update_permalink(file_path)
    print("任务已完成，所有文件已更新。")

# Set the root directory to the path where your markdown files are located
root_directory = r'D:\Project\city-walk\city-walk\packages\guangdong\city-shenzhen\docs\zh-TW\notes'
traverse_and_update(root_directory)