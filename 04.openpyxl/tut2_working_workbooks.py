import openpyxl

# Open subjects_data excel file
subjects_book = openpyxl.load_workbook("subjetcs-data.xlsx")

# Get the right sheet
subjects_sheet = subjects_book["students"]

# Change values
subjects_sheet["B7"].value = 0
subjects_sheet["C7"] = 0

# Save changes
subjects_book.save("subjetcs-data.xlsx")

# Finish by closing the workbook
subjects_book.close
