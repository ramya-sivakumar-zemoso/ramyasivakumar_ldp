#method decorator
def debug(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

class Test:
    @debug
    def run(self):
        print("Running")

t = Test()
t.run()

#class decorator
def add_method(cls):
    cls.greet = lambda self: "Hello!"
    return cls

@add_method
class Person:
    pass

p = Person()
print(p.greet()) 

#function decorator
def uppercase_decorator(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

@uppercase_decorator
def greet():
    return "hello"

print(greet())  

