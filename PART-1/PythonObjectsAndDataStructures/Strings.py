# ACCESSING STRING ELEMENT
s = 'hello'
print("Character at index 0 in 'hello':", s[0])  

# STRING SLICING
text = 'abcdefghijk'
print("Slice from index 1 to 2 (1:3):", text[1:3])  
print("Slice from index 1 to 5 (1:6:1):", text[1:6:1])  
print("Reverse of the string:", text[::-1]) 

# STRING METHODS
string = "This is the implementation of String #Methods"
string2 = "This is a dog dog house"
string3 = "    Strip code implementation    "
string_list = ['today', 'is', 'a', 'good', 'day']

# Lowercase
print("Lowercase version of string:", string.lower())  

# Split by whitespace
print("Split string by spaces:", string.split())

# Split by '#'
print("Split string by '#':", string.split("#"))  
# Accessing second part of split result
print("Second part after splitting by '#':", string.split("#")[1])  

# Replace all occurrences of 'dog' with 'puppy'
print("Replace all 'dog' with 'puppy':", string2.replace("dog", "puppy"))  

# Replace only first occurrence
print("Replace first 'dog' with 'puppy':", string2.replace("dog", "puppy", 1))

# Join list into sentence
sentence3 = ' '.join(string_list)
print("Joined string_list into sentence:", sentence3)  

# Split using invalid pattern
print("Split string using 'e' and 'i':", string.split('e' and 'i'))  
print("Actually splitting using 'i':", string.split('i'))

# Strip whitespace
print("Stripped string3 (remove leading/trailing whitespace):", string3.strip())  

# Strip specific characters
print("Strip characters 'i','o','n' from ends:", string3.strip("ion"))
