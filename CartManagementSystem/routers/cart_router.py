from fastapi import APIRouter, status
from schema.cart_schema import CartRequest, CartUpdateRequest
from utils.constants import CART_ITEM_UPDATED, ITEM_REMOVED_SUCCESSFULLY , ITEM_ADDED_SUCCESSFULLY
from utils.utils import user_dependency, db_dependency
from services import cart_services

router = APIRouter(prefix="/cart", tags=["cart"])

@router.post("/", status_code=status.HTTP_201_CREATED)
def add_to_cart(cart: CartRequest, db: db_dependency, user: user_dependency):
    cart_services.add_to_cart(user["user_id"], cart, db)
    return {"message": ITEM_ADDED_SUCCESSFULLY}
        
@router.get("/", status_code=status.HTTP_200_OK)
def get_user_cart_items(db: db_dependency, user: user_dependency):
    cart_items = cart_services.get_cart_items_for_user(user["user_id"], db)
    return [
        {
            "product_id": item.product_id,
            "selected_quantity": item.selected_quantity,
        }
        for item in cart_items
    ]

@router.patch("/{product_id}", status_code=status.HTTP_200_OK)
def patch_cart_item(product_id: str, updates: CartUpdateRequest, db: db_dependency, user: user_dependency):
    cart_services.patch_cart_item(user["user_id"], product_id, updates, db)
    return {
        "message": {CART_ITEM_UPDATED}
    }

@router.delete("/{product_id}", status_code=status.HTTP_200_OK)
def delete_cart_item(product_id: str, db: db_dependency, user: user_dependency):
    cart_services.delete_cart_item(user["user_id"], product_id, db)
    return {"message": {ITEM_REMOVED_SUCCESSFULLY}}
