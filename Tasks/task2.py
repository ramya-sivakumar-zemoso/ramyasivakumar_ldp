""""
Task - 2 : Create a class BankAccount that allows a user to deposit, withdraw, and check the balance. Implement encapsulation so that the balance cannot be accessed directly but only through methods.
Requirements:

deposit(amount): Adds amount to the balance.
withdraw(amount): Deducts amount from the balance if sufficient funds exist.
get_balance(): Returns the current balance.
The balance should be private and should not be directly accessible.

Example usage :
acc = BankAccount(1000)  
acc.deposit(500)  
acc.withdraw(300)  
print(acc.get_balance())  # Output: 1200  
print(acc.__balance)  # This should raise an AttributeError  
"""

class BankAccount:
    def __init__(self, balance):
        self.__balance = balance
    def deposit(self,deposit_amount):
        if deposit_amount > 0:
            self.__balance += deposit_amount
    def withdraw(self,withdraw_amount):
        if withdraw_amount > self.__balance:
            print("Insufficient funds")
        else:
            self.__balance -= withdraw_amount
    def get_balance(self):
        return self.__balance

acc = BankAccount(1000)
acc.deposit(500)
acc.withdraw(300)
print(acc.get_balance())  
#print(acc.__balance)  # Raises AttributeError
print(acc._BankAccount__balance)

