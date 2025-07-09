from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, ForeignKey
from database.database import Base

class Users(Base):
    __tablename__ = 'users'
    user_id = Column(Integer, primary_key=True, unique=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)
    role = Column(String)
    cart_items = relationship("Cart", back_populates="user")
    phone_number=Column(String)
