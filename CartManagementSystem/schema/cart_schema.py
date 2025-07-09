from pydantic import BaseModel
from typing import Optional

class CartRequest(BaseModel):
    product_id: str
    selected_quantity: int

class CartUpdateRequest(BaseModel):
    selected_quantity: Optional[int] = None
