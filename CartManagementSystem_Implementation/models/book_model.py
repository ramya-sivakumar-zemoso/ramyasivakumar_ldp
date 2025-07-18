from database.database import Base

from sqlalchemy import Column, Integer, String

class BooksTable(Base):
    __tablename__='books'
    id=Column(Integer,primary_key=True,index=True)
    name=Column(String)
    author=Column(String)

