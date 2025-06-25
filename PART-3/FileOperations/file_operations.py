#read file line by line
filename = "FileOperations/sample.txt"
with open(filename) as f:
    content = f.readlines()
print(content)

#read text as read block
filename = "FileOperations/sample.txt"
infile = open(filename, 'r')
data = infile.read()
infile.close()
print(data)

#write data to sample.txt --> w - rewrites data , a- appends to existing file

fw=open("FileOperations/sample.txt","w")
fw.write("Write operation was successfully performed in this file")
fw.close

#Exclusive creation
try:
    with open('FileOperations/sample.txt', 'x') as f:
        f.write("Created a new file using exclusion")
except FileExistsError:
    print("File already exists!")

#Binary mode
# Writing binary
with open('binaryfile.bin', 'wb') as f:
    f.write(b"Binary content")

# Reading binary
with open('binaryfile.bin', 'rb') as f:
    data = f.read()
    print(data)

#r+ --> read and write mode

with open('FileOperations/sample.txt', 'r+') as f:
    print("Before write:", f.read())
    f.seek(0)
    f.write("Updated using 'r+' mode.")


