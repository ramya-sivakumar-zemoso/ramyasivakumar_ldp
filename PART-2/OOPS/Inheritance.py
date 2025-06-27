#single level inheritance
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks")

a = Animal("Animals")
d = Dog("Dogs")

a.speak()
d.speak()

#multiple inheritance
class Parent1:
    def method1(self):
        print("Method from Parent1")

class Parent2:
    def method2(self):
        print("Method from Parent2")

class Child(Parent1, Parent2):
    def method3(self):
        print("Method from Child")

c = Child()
c.method1() 
c.method2() 
c.method3() 

# Hierarchical Inheritance
class Parent:
    def home(self):
        print("Home from Parent")

class Child1(Parent):
    def car(self):
        print("Car from Child1")

class Child2(Parent):
    def bike(self):
        print("Bike from Child2")

c1 = Child1()
c2 = Child2()

c1.home()
c1.car()
c2.home()
c2.bike()
