import openpyxl

# open subjetcs-data

subjects_book = openpyxl.load_workbook("subjetcs-data.xlsx")
student_sheet = subjects_book["students"]


for cell in student_sheet["A2:E6"]:
    match = cell[0].offset(0, 1).value
    science = cell[0].offset(0, 2).value
    english = cell[0].offset(0, 3).value
    gym = cell[0].offset(0, 4).value

    # print out rows values
    print("Match: {0}, Science: {1}, English: {2}, Gym: {3}".format(
        match, science, english, gym))
