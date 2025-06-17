# CONDITIONAL STATEMENTS
marks = int(input('Enter marks: '))
if (marks > 80) and (marks <= 90):
    print('Result: First Class')
elif (marks > 60) and (marks <= 80):
    print('Result: Second Class')
else:
    print('Result: Satisfactory')

# FOR-LOOP STATEMENT
fruits = ['apple', 'banana', 'cherry', 'strawberry', 'Guava']
print("Using for-loop to print fruits:")
for fruit in fruits:
    print(fruit)

# WHILE LOOP STATEMENT
print("Using while-loop to print fruits with index:")
i = 0
while i < len(fruits):
    print('The fruit {} is {}'.format(i + 1, fruits[i]))
    i += 1

# RANGE FUNCTION
print("Using range(10):", list(range(10)))

# USING RANGE TO LOOP THROUGH A LIST
print("Using range and index to print fruits:")
for fruit in range(0, len(fruits)):
    print(fruits[fruit])

# DOCSTRING EXAMPLE
def circle_area(radius):
    """
    THIS FUNCTION EXPECTS THE RADIUS VALUE TO BE PASSED
    AND CALCULATES THE AREA OF THE CIRCLE
    Formula: Area = radius^2 (π is ignored in this simplified example)
    """
    return radius ** 2

radius = int(input("\nEnter the radius of the circle: "))
print("Area of the circle (radius squared):", circle_area(radius))

# MATCH CASE STATEMENT
def check_day(day):
    match day:
        case "Monday":
            return "Start of the week"
        case "Friday":
            return "Weekend is near"
        case "Saturday" | "Sunday":
            return "It's the weekend!"
        case _:
            return "A regular weekday"

print("Match Case Outputs:")
print("Day: Monday →", check_day("Monday"))
print("Day: Sunday →", check_day("Sunday"))
print("Day: Wednesday →", check_day("Wednesday"))
