# Local Scope
def my_function():
    local_var = "I'm inside the function"
    print(local_var)

my_function()
# print(local_var)  # This would cause an error
print("")

# Global Scope
balance = 0

def addAmount(x):
    global balance  
    balance = balance + x

addAmount(5)
print("Accessing and modifying the global variable:", balance)

print("")

# Enclosing Scope (Nested Functions)
def outer_function():
    enclosing_var = "I'm in the outer function"

    def inner_function():
        print(enclosing_var)  
    inner_function()

outer_function()

print("")

# Built-in Scope
my_list = [1, 2, 3]
print("Built-in len function output:", len(my_list))  # Uses built-in len()

def example_shadowing():
    len = "I am a local variable named len"  # Shadows the built-in 'len'
    print(len)

example_shadowing()
print("Built-in len still works here:", len(my_list))
