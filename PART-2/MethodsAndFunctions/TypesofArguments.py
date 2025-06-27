#Positional Arguments
def greet(name, message):
    print(f"Hello, {name}! {message}")

greet("Ramya", "How are you today?")
greet("Reeta", "Nice to meet you!")

print("")

#Keyword Arguments
def describe_car(make, model, year):
    print(f"This is a {year} {make} {model}.")

describe_car(make="Toyota", model="Camry", year=2023)
describe_car(year=2020, make="Honda", model="Civic")

print("")

#Default Arguments
def send_email(to_address, subject="No Subject", body=""):
    print(f"Sending email to: {to_address}")
    print(f"Subject: {subject}")
    print(f"Body:\n{body}")

send_email("alice@example.com")
send_email("bob@example.com", subject="Meeting Reminder")
send_email("charlie@example.com", subject="Project Update", body="The project is progressing well.")

print("")

#Arbitrary Positional Arguments (*args)
def calculate_sum(*numbers):
    total = 0 
    for num in numbers:
        total += num
    print(f"The sum is: {total}")

calculate_sum(1, 2, 3)
calculate_sum(10, 20, 30, 40, 50)
calculate_sum()  

print("")

#Arbitrary Keyword Arguments (**kwargs)
def create_profile(name, **details):
    print(f"Name: {name}")
    for key, value in details.items():
        print(f"{key.replace('_', ' ').title()}: {value}")

create_profile("Alice", age=30, city="New York")
create_profile("Bob", occupation="Engineer", hobbies=["reading", "hiking"], active=True)
create_profile("Charlie")
