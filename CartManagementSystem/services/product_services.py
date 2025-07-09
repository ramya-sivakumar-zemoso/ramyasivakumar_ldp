from sqlalchemy.orm import Session
from models.products_model import Products
from fastapi import HTTPException, status
from pydantic import BaseModel
from typing import Optional
from schema.product_schema import ProductCreate,ProductUpdate
from utils.constants import PRODUCT_DELETE_SUCCESS, PRODUCT_NOT_FOUND


def get_all_products(db: Session):
    products = db.query(Products).all()
    return products 

def get_product(product_id: str, db: Session):
    product = db.query(Products).filter(Products.product_id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail={PRODUCT_NOT_FOUND})
    return product 

def add_product(data: ProductCreate, db: Session):
    new_product = Products(
        name=data.name,
        description=data.description,
        price=data.price,
        stock_quantity=data.stock_quantity,
        category=data.category
    )
    db.add(new_product,Products.product_id)
    db.commit()
    return new_product

def update_product(product_id: str, data: ProductCreate, db: Session):
    updated_product = get_product(product_id, db)
    updated_product.name = data.name
    updated_product.description = data.description
    updated_product.price = data.price
    updated_product.stock_quantity = data.stock_quantity
    updated_product.category = data.category

    db.commit()
    return updated_product


def patch_product(product_id: str, updates: ProductUpdate, db: Session):
    updated_product_detail = get_product(product_id, db)
    if updates.name is not None:
        updated_product_detail.name = updates.name
    if updates.description is not None:
        updated_product_detail.description = updates.description
    if updates.price is not None:
        updated_product_detail.price = updates.price
    if updates.stock_quantity is not None:
        updated_product_detail.stock_quantity = updates.stock_quantity
    if updates.category is not None:
        updated_product_detail.category = updates.category
    db.commit()
    return updated_product_detail


def delete_product(product_id: str, db: Session):
    product = get_product(product_id, db)
    db.delete(product)
    db.commit()
    return {"message": {PRODUCT_DELETE_SUCCESS}}
