# Function definition with default parameters
def add_func(a=3, b=10):
    print("Sum of a and b is:", a + b)

print("Function with Default Parameters:")
add_func()
print()

# Storing returned value
def circle_area(radius):
    return radius ** 2

radius = int(input("Enter the radius of the circle: "))
print("Area of the circle is:", circle_area(radius))
print()

# Map function with eligibility check
def eligibilty(age):
    if age >= 18:
        return "Eligible"
    else:
        return "Not Eligible"

age = [18, 19, 13, 20, 12]
print("Eligibility using map():")
eligibility_list = list(map(eligibilty, age))
print("Eligibility results:", eligibility_list)
print()

# Lambda Expressions with map
numbers = [17, 27, 16, 13]
print("Numbers tripled using lambda and map():")
tripled = list(map(lambda value: value * 3, numbers))
print("Tripled list:", tripled)
print()

# Filter function to select eligible (18+)
print("Filtering eligible ages using filter():")
eligible_ages = list(filter(lambda age: age >= 18, age))
print("Eligible ages:", eligible_ages)
print()

# Return multiple values
def personal_details():
    name = "Ramya"
    age = 22
    city = "Chennai"
    return name, age, city

print("Personal Details:")
name, age, city = personal_details()
print("Name:", name)
print("Age:", age)
print("City:", city)
