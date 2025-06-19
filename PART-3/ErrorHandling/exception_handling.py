#Exceptions using raise
def validate_age(age):
    if not isinstance(age, (int, float)):
        raise TypeError("Age must be a number.")
    if age < 0:
        raise ValueError("Age cannot be negative.")
    print("Age is valid:", age)

try:
    validate_age(-5)
except ValueError as e:
    print(f"Caught an error: {e}")
try:
    validate_age("twenty")
except TypeError as e:
    print(f"Caught an error: {e}")

#assert 
def divide(a, b):
    assert b != 0, "Divisor cannot be zero!" 
    return a / b

print(divide(10, 2))


#custom exceptions
class InsufficientFundsError(Exception):
    def __init__(self, required_amount, available_amount, message="Insufficient funds"):
        self.required_amount = required_amount
        self.available_amount = available_amount
        self.message = message
        super().__init__(self.message)

    def __str__(self):
        return (f"{self.message}: You need ${self.required_amount}, "
                f"but only have ${self.available_amount}.")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(amount, balance)
    else:
        new_balance = balance - amount
        print(f"Withdrawal successful. New balance: ${new_balance}")
        return new_balance

account_balance = 100

try:
    withdraw(account_balance, 150)
except InsufficientFundsError as e:
    print(e)
    print(f"Required: ${e.required_amount}, Available: ${e.available_amount}")