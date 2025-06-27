class Person:
    City='Chennai'
    def __init__(self):
        self.name = "Ramya"            
        self._college = "ABCD"         
        self.__password = "password@123"  

    def show_info(self):
        print("Name:", self.name)
        print("College:", self._college)
        print("Password:", self.__password)

p = Person()
p.show_info()
print(Person.City)
print(p.name)           
print(p._college)       
# print(p.__password)  
print(p._Person__password) #can be accessed using name mangling 