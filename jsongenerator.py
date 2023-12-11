import os
import json

def format_files_to_json(folder_path):
    file_list = os.listdir(folder_path)
    
    # Sort files by last modification date in reverse order
    file_list.sort(key=lambda x: os.path.getmtime(os.path.join(folder_path, x)), reverse=True)

    data = []
    for filename in file_list:
        if os.path.isfile(os.path.join(folder_path, filename)):
            file_path = os.path.join(folder_path, filename)
            url = f"/LucG-Photography-Vuejs/img/{filename}"
            title = os.path.splitext(filename)[0]
            
            data.append({
                "url": url,
                "title": title
            })

    return data

def save_to_json(data, output_file="imggrid.json"):
    with open(output_file, 'w') as json_file:
        json.dump(data, json_file, indent=2)

if __name__ == "__main__":
    folder_path = "./"  # Set the folder path here
    data = format_files_to_json(folder_path)
    save_to_json(data)
    print(f"JSON file created: {os.path.abspath('imggrid.json')}")