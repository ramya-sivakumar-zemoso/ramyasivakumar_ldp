from fastapi import APIRouter,HTTPException, status
from schema.product_schema import ProductResponse,ProductUpdateRequest,CreateProductRequest
from utils.constants import ADMIN_ONLY_ACCESS , PRODUCT_UPDATE_SUCCESS , PRODUCT_DELETE_SUCCESS , PRODUCT_ADDED_SUCCESS
from services import product_services
from utils.utils import db_dependency,user_dependency 

router = APIRouter(prefix="/products", tags=["products"])

#view all products
@router.get("/", response_model=list[ProductResponse])
def get_all_products(db: db_dependency, user: user_dependency):
    return product_services.get_all_products(db)


#view  products a particular product
@router.get("/{product_id}", response_model=CreateProductRequest)
def get_product(product_id: str, db: db_dependency, user: user_dependency):
    return product_services.get_product(product_id, db)

#add a new product

@router.post("/add_products", status_code=status.HTTP_201_CREATED)
def add_new_product(product: CreateProductRequest, db: db_dependency, user: user_dependency):
    if user["user_role"] != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail={ADMIN_ONLY_ACCESS})
    added_product = product_services.add_product(product, db)
    return  {'message':{PRODUCT_ADDED_SUCCESS},'product': {
            'product_id': added_product.product_id,
            'product_name': added_product.name,
            'description': added_product.description,
            'price': added_product.price,
            'quantity': added_product.stock_quantity,
            'category': added_product.category,
        }}

#update a product

@router.put("/{product_id}",status_code=status.HTTP_201_CREATED )
def update_existing_product(product_id: str, updated: CreateProductRequest, db: db_dependency, user: user_dependency):
    if user["user_role"] != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail={ADMIN_ONLY_ACCESS})
    product_services.update_product(product_id, updated, db)
    return  {'message':PRODUCT_UPDATE_SUCCESS}

#update a product detail
@router.patch("/{product_id}", status_code=status.HTTP_200_OK)
def patch_product(product_id: str, update: ProductUpdateRequest, db: db_dependency, user: user_dependency):
    if user["user_role"] != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail={ADMIN_ONLY_ACCESS})
    product_services.patch_product(product_id, update, db)
    return {"message": PRODUCT_UPDATE_SUCCESS}

#delete a product 
@router.delete("/{product_id}", status_code=status.HTTP_200_OK)
def delete_product(product_id: str, db: db_dependency, user: user_dependency):
    if user["user_role"] != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail={ADMIN_ONLY_ACCESS})
    product_services.delete_product(product_id, db)
    return {'message':{PRODUCT_DELETE_SUCCESS}}
