import re
email=input("Enter an email id")
pattern=r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

def check_email(email:str):
    check_valid=re.match(pattern,email)
    if check_valid:
      print("Entered email is valid")
    else:
      print("Invalid email")

check_email(email)

      