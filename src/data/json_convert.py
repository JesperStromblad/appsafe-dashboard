import csv
import json

# Path to your CSV file
file_path = 'data.csv'

# Define the corrected headers
fixed_headers = [
    "App name",
    "Which phone hardware(s) can be misued from app?*",
    "Is data collected by third party?*",
    "Can third party update a ligitimate app with a malicious one?",
    "Can third party intercept application communication?",
    "Can harmful code be executed remotely?",
    "Can device be controlled remotely?"
]

# Read and parse the CSV file
data = []
with open(file_path, 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file, delimiter=';', fieldnames=fixed_headers)
    next(reader)  # Skip the original header row
    for row in reader:
        for key in row:
            if row[key] == 'N/A':
                row[key] = None  # Convert 'N/A' to None for JSON null representation
        data.append(row)

# Convert the list of dictionaries to the desired JSON structure
final_json = {"appData": data}

# Print or save the JSON structure
print(json.dumps(final_json, indent=4))
