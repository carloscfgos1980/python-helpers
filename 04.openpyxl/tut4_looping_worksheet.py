import openpyxl

book = openpyxl.load_workbook("movies.xlsx")


sheet_names = book.sheetnames
'''
for s in sheet_names:
    print("sheet name:", s)
    # get a reference from the booksheets
    this_sheet = book[s]
    print("booksheet:", this_sheet)

    # print out content of A1
    print("content:", this_sheet["A1"].value)
'''
# Shorter and easier way to do above

for s in book:
    # print out content of A1
    print(s["A1"].value)
