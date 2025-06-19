#user-defined decorator
def my_decorator(func):
    def wrapper():
        print("Working of the function before the other function is called")
        func()
        print("Working of the function before the other function is called")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()

#Decorators --> Nested functions 
def repeat(num_times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                func(*args, **kwargs)
                print(type(args))
                print(type(kwargs))
        return wrapper
    return decorator



@repeat(3)
def greet(name):
    print(f"Hello {name}!")

greet("Ramya")


#multiple decorators

def star(func):
    def wrapper(*args, **kwargs):
        print("Printing stars before percent")
        func(*args, **kwargs)
        print("printing stars after percent")
    return wrapper

def percent(func):
    def wrapper(*args, **kwargs):
        print("Printing percent")
        func(*args, **kwargs)
        print("printing precent")
    return wrapper

@star
@percent
def message():
    print("Decorated Function")

message()

