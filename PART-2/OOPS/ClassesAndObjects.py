#objects
class Website:
  def __init__(self, title):
        self.title = title

  def showTitle(self):
        print(f"Website title: {self.title}")
obj = Website('google.com')
obj.showTitle()


#classes
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def show_info(self):
        print(f"User: {self.name}, Age: {self.age}")

u = User('Alice', 25)
u.show_info()

#init
class Product:
    def __init__(self, name='Unknown', price=0.0):
        self.name = name
        self.price = price

    def showProduct(self):
        print(f"{self.name}: ${self.price}")

p1 = Product()
p2 = Product("Laptop", 1200)

p1.showProduct()
p2.showProduct()

#getter and setter methods
class Employee:
    def __init__(self, name):
        self.__name = name  

    def getName(self):
        return self.__name

    def setName(self, name):
        self.__name = name
        

e = Employee("John")
print(e.getName())  
e.setName("Jane")  
print(e.getName())
