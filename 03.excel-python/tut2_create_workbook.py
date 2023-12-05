from openpyxl import Workbook

wb = Workbook()
ws = wb.active
ws.title = "Data"
# this method will add rows of data to my worksheet <data>
ws.append(['TIm', 'is', 'great', '!'])
ws.append(['TIm', 'is', 'great', '!'])
ws.append(['TIm', 'is', 'great', '!'])
ws.append(['TIm', 'is', 'great', '!'])
ws.append(['end'])


wb.save('tim1.xlsx')
