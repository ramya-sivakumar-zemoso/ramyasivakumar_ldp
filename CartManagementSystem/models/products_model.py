from uuid import uuid4
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, ForeignKey
from database.database import Base

# Optional Enum (commented out for now)
# import enum
# class CategoryEnum(enum.Enum):
#     groceries = "groceries"
#     fashion = "fashion"
#     sports = "sports"

class Products(Base):
    __tablename__ = 'products'
    product_id = Column(String, primary_key=True, unique=True, default=lambda: str(uuid4()))
    name = Column(String)
    description = Column(String)
    price = Column(Integer)
    stock_quantity = Column(Integer)
    category = Column(String)
    cart_items = relationship("Cart", back_populates="product")
