# DECLARING A LIST
my_list = ['a', 'b', 'c']
print("Initial list:", my_list)

# APPENDING A VALUE
my_list.append('r')
print("List after appending 'r':", my_list)

# REPLACING A VALUE
my_list[3] = 'replaced'
print("List after replacing the last element with 'replaced':", my_list)

# NESTED LIST
nested_list = [1, 2, [3, 4]]
print("Nested List:", nested_list)
print("Accessing nested element [2]:", nested_list[2])
print("Accessing nested element [2][1]:", nested_list[2][1])

# REVERSE A LIST USING SLICING
x = [3, 6, 21, 1, 5, 98, 4, 23, 1, 6]
print("Original list x:", x)
print("Reverse of the list x using slicing:", x[::-1])

# COPY A LIST
new_list = my_list.copy()
print("Copy of my_list into new_list:", new_list)

# UPDATE VALUE IN THE COPIED LIST
new_list[0] = 'new'
print("new_list after changing index 0 to 'new':", new_list)
print("Original my_list remains unchanged:", my_list)

# CREATE ANOTHER COPY AND MODIFY IT
updated_list = new_list.copy()
print("Copy of new_list into updated_list:", updated_list)
updated_list[1] = 'updated'
print("updated_list after updating index 1 to 'updated':", updated_list)
print("new_list remains unchanged:", new_list)
print("my_list remains unchanged:", my_list)

# COPY LIST USING SLICING
copy_list = updated_list[:]
copy_list[2] = 'slicing operator'
print("copy_list after modifying index 2 to 'slicing operator':", copy_list)
print("updated_list remains unchanged:", updated_list)

# LIST COMPREHENSION
x = [1, 2, 3, 4]
output = []
for num in x:
    output.append(num ** 2)
print('Output using for loop (squared values):', output)

# CONVERTING TO LIST COMPREHENSION
listcomp_output = [num ** 4 for num in x]
print('Output using List Comprehension (to the power of 4):', listcomp_output)

# LIST METHODS
student = ['std1', 'std2', 'std3', 'std4']
print("Initial student list:", student)
student.pop()
print("After popping last student:", student)

# 'in' keyword
print("Is 'std3' in student list?", 'std3' in student)
print("Index of 'std3' in student list:", student.index('std3'))

# FIND METHOD ON STRING
text = "This is a sample text sentence a"
print("Position of first occurrence of 'a' in text:", text.find('a'))

# ITERATING OVER A LIST OF TUPLES
x = [(1, 2), (3, 4), (5, 6)]
print("Iterating over list of tuples:")
for item in x:
    print(item)

# SORTING LIST ELEMENTS
unsorted_list = [1, 5, 3, 6, 8, 2]
print("Original unsorted list:", unsorted_list)

unsorted_list.sort()
print("List after sorting:", unsorted_list)

unsorted_list.sort(reverse=True)
print("List after reverse sorting:", unsorted_list)
