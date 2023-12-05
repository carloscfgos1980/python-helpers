import pandas as pd
import sqlite3
df = pd.read_excel('Amet_data.xlsx')
print(df)


db = sqlite3.connect('amet.db')
dfs = pd.read_excel('Amet_data.xlsx', sheet_name=None)
for table, df in dfs.items():
    df.to_sql(table, db)
    print(f'{df} inserted successfully')


con = sqlite3.connect('amet.db')
wb = pd.ExcelFile('Amet_data.xlsx')
for sheet in wb.sheet_names:
    df = pd.read_excel('Amet_data.xlsx', sheet_name=sheet)
    df.to_sql(sheet, con, index=False, if_exists="replace")
con.commit()
con.close()
