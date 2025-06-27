#Iterable
from collections.abc import Iterable

# Check if various types are iterable
print(isinstance([1, 2, 3], Iterable))       
print(isinstance({'a':'1','b':'2'}, Iterable))  
print(isinstance(123, Iterable))           

print("\nLooping through a list:")
# Looping through a list 
my_list = [1, 2, 3]
for item in my_list:
    print(item)

print("\nCustom Iterable using Class:")

# Custom iterable class
class Count:
    def __init__(self, max):
        self.num = 1
        self.max = max

    def __iter__(self):
        return self

    def __next__(self):
        if self.num <= self.max:
            val = self.num
            self.num += 1
            return val
        else:
            raise StopIteration 

counter = Count(3)
for num in counter:
    print(num)
