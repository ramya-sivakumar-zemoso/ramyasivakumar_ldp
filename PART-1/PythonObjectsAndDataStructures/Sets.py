# Creating a Set (removes duplicates automatically)
print("Creating set with duplicates: set([1,1,1,1,2,2,2,4,4,4,5,5])")
my_set = set([1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 5, 5])
print("Set after removing duplicates:", my_set)

# Accessing Set Items using a loop (direct indexing is not allowed in sets)
print("Accessing elements in a set:")
for item in my_set:
    print(item)

# Add Items to Set
s = {'a', 'b', 'c'}
print("Original Set s:", s)
s.add('d') 
print("After adding 'd':", s)

# Remove Items from Set
s.remove('a') 
print("After remove('a'):", s)

s.discard('x') 
print("After discard('x'):", s)

removed_item = s.pop()  # removes and returns a random item
print(f"After pop(), removed: {removed_item}, Remaining set: {s}")

# del keyword (completely deletes the set)
s2 = {10000, 22322, 3245322}
s2.add(4)
print("Set s2 before deletion:", s2)
del s2
# print(s2)  # Uncommenting this will raise NameError because s2 is deleted

# Union
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1.union(set2)
print("\nUnion of", set1, "and", set2, "is:", union_set)

# Union with other types like tuple
tuple1 = (5, 6, 7)
joined_set = set1.union(tuple1)
print("Union of set and tuple:", joined_set)

# Update 
set1.update({10, 20})
print("Set1 after update with {10, 20}:", set1)

# Intersection
setA = {1, 2, 3, 4}
setB = {3, 4, 5, 6}
intersection_set = setA.intersection(setB)
print("Intersection of", setA, "and", setB, "is:", intersection_set)

# Using & operator
print("Intersection using &:", setA & setB)

# Difference
diff_set = setA.difference(setB)
print("Difference of", setA, "minus", setB, "is:", diff_set)

# Using - operator
print("Difference using -:", setA - setB)

# Symmetric Difference
sym_diff = setA.symmetric_difference(setB)
print("Symmetric Difference (unique in each set):", sym_diff)
