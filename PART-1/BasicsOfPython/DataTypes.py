# VARIABLE ASSIGNMENTS WITH DATA TYPES
x = 5               # int
pi = 3.14           # float
name = "Ramya"      # str
is_valid = True     # bool
numbers = [1, 2, 3] # list

# Displaying variable types
print("x =", x, "Type:", type(x))
print("pi =", pi, "Type:", type(pi))
print("name =", name, "Type:", type(name))
print("is_valid =", is_valid, "Type:", type(is_valid))
print("numbers =", numbers, "Type:", type(numbers))

# STRING FORMATTING USING .format()
num = 12
name = 'Sam'
print('Using format() without named placeholders:')
print('My number is {} and my name is {}'.format(num, name))  # Positional formatting

print('Using format() with named placeholders (recommended):')
print('My number is {one} and my name is {two}'.format(one=num, two=name))

# MULTIPLE VARIABLE ASSIGNMENT IN ONE LINE
a, b, c = 10, 20, 30
print('Multiple variable assignment:')
print("value of a:", a)
print("value of b:", b)
print("value of c:", c)
