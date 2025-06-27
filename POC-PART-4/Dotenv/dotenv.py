from dotenv import load_dotenv
import os

load_dotenv() 

secret = os.getenv("SECRET_KEY")
dbname = os.getenv("DB_NAME")

print("Secret Key:", secret)
print("Database Name:", dbname)