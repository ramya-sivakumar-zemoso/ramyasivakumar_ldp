#static methods --> bound to neither class nor instance , is a helper function

class CheckLeapYear:

    @staticmethod
    def is_leap_year(year):
        return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

print(CheckLeapYear.is_leap_year(2024))  
print(CheckLeapYear.is_leap_year(2023))


#classmethod -->create methods bound to class
class Employee:
    company_name = "CompanyA"

    def __init__(self, name):
        self.name = name

    @classmethod
    def change_company(cls, new_name):
        cls.company_name = new_name

e1 = Employee("Ramya")
print(Employee.company_name)  

Employee.change_company("CompanyB")
print(Employee.company_name)  