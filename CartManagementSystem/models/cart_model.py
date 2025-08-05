from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database.database import Base

class Cart(Base):
    __tablename__ = 'cart'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    product_id = Column(String, ForeignKey("products.product_id"))
    selected_quantity = Column(Integer)
    price = Column(Integer)

    user = relationship("Users", back_populates="cart_items")
    product = relationship("Products", back_populates="cart_items")
