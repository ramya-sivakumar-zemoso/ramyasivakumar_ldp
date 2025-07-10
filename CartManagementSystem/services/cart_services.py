from sqlalchemy.orm import Session
from sqlalchemy import func
from schema.cart_schema import CartRequest, CartUpdateRequest
from models.products_model import Products
from models.cart_model import Cart
from fastapi import HTTPException
from starlette import status
from utils.constants import NO_ITEMS_IN_CART, PRODUCT_NOT_FOUND, CART_ITEM_NOT_FOUND

def add_to_cart(user_id: int, cart: CartRequest, db: Session):
    product = db.query(Products).filter(func.lower(Products.product_id) == cart.product_id).first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail={PRODUCT_NOT_FOUND})

    new_cart_item = Cart(
        user_id=user_id,
        product_id=product.product_id,
        selected_quantity=cart.selected_quantity,
        price=product.price
    )
    db.add(new_cart_item)
    db.commit()
    return new_cart_item

def get_cart_items_for_user(user_id: int, db: Session):
    items = db.query(Cart).filter(Cart.user_id == user_id).all()
    if not items:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail={NO_ITEMS_IN_CART})
    return items

def patch_cart_item(user_id: int, product_id: str, updates: CartUpdateRequest, db: Session):
    product = db.query(Products).filter((Products.product_id) == product_id).first()
    if not product:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail={PRODUCT_NOT_FOUND})
    cart_item = db.query(Cart).filter(Cart.user_id == user_id, Cart.product_id == product.product_id).first()
    if not cart_item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail={CART_ITEM_NOT_FOUND})
    if updates.selected_quantity is not None:
        cart_item.selected_quantity = updates.selected_quantity
    db.commit()
    return cart_item

def delete_cart_item(user_id: int, product_id: str, db: Session):
    product = db.query(Products).filter(Products.product_id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail={PRODUCT_NOT_FOUND})
    cart_item = db.query(Cart).filter(Cart.user_id == user_id, Cart.product_id == product.product_id).first()
    if not cart_item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail={CART_ITEM_NOT_FOUND})
    db.delete(cart_item)
    db.commit()
    return cart_item
