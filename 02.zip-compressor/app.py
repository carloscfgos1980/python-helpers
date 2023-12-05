from zipfile import ZipFile
import os
'''
# compres single file 
file = 'foto_1.png'
f = ZipFile('archive.zip', 'w')
f.write(file)
f.close()

# compress more than 1 file
f = ZipFile('archive.zip', 'w')
for i in range(1, 4):
    f.write(f'foto_{i}.png')
f.close()


# compress folder
folder = '/Users/carlosinfante/Desktop/winc-academy/frontend-course/MODULE6-ASYNC JAVASCRIPT-APIS'
f = ZipFile('async_JavaScript.zip', 'w')
for root, dirs, files in os.walk(folder):
    for file in files:
        f.write(os.path.join(root, file))
f.close()
'''
f = ZipFile('async_JavaScript.zip', 'r')
f.extractall()
f.close()
