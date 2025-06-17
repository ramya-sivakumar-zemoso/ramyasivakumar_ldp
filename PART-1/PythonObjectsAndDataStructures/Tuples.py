# TUPLES
t = ('a1', 'a2', 'a3')
print("Original tuple t:", t)
# t[0] = 'updated' 

# TUPLE PACKING
my_tuple = 1, 2, 3  # packing values into a tuple without parentheses
print("Packed tuple:", my_tuple)
print("Type of my_tuple:", type(my_tuple)) 

# TUPLE UNPACKING FROM LIST OF TUPLES
x = [(1, 2), (3, 4), (5, 6)]
print("Printing the first value from each tuple:")
for (a, b) in x:
    print(a)

print("Printing the second value from each tuple:")
for (a, b) in x:
    print(b)

# EXTENDED TUPLE UNPACKING
a, *b, c = (1, 2, 3, 4, 5)
print("Value of a (first element):", a)      
print("Value of b (middle elements as list):", b)   
print("Value of c (last element):", c)        
