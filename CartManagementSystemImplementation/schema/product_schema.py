from uuid import uuid4
from pydantic import BaseModel, Field
from typing import Optional


class CreateProductRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    description: str = Field(..., min_length=5, max_length=500)
    price: int = Field(..., gt=0)
    stock_quantity: int = Field(..., ge=0)
    category: str = Field(..., min_length=3, max_length=50)

class ProductResponse(CreateProductRequest):
    product_id: str

    class Config:
        orm_mode = True

class ProductUpdateRequest(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[int] = None
    stock_quantity: Optional[int] = None
    category: Optional[str] = None