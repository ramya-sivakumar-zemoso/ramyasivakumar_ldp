#Polymorphism
class Animal:
    def make_sound(self):
        raise NotImplementedError("Subclass must implement abstract method 'make_sound'")
class Dog(Animal):
    def make_sound(self):
        return "Barks!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

class Cow(Animal):
    def make_sound(self):
        return "Moo!"
def animal_sound_party(animals):
    for animal in animals:
        print(f"The {animal.__class__.__name__} says: {animal.make_sound()}")

my_dog = Dog()
my_cat = Cat()
my_cow = Cow()


#method overloading --> not possible
class Example:
    def greet(self):
        print("Hello")

    def greet(self, name):
        print("Hello", name)

obj = Example()
obj.greet("Ramya") 
# obj.greet() 

#method overloading alternative method
class Example:
    def greet(self, name="Guest"):
        print("Hello", name)

obj = Example()
obj.greet()         
obj.greet("Ramya")  