from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from typing import Annotated
from schema.auth_schema import Token
from fastapi.security import OAuth2PasswordRequestForm
from utils.constants import USER_CREATED_SUCCESS,INVALID_CREDENTIALS,USER_NOT_FOUND,ADMIN_ONLY_ACCESS
from services import auth_services
from utils.utils import get_current_user,db_dependency
import time

router = APIRouter(prefix="/auth", tags=["auth"])

#add user
@router.post("/signup", status_code=status.HTTP_201_CREATED)
async def create_user(db: db_dependency, request: auth_services.CreateUserRequest):
    user = auth_services.create_user(request, db)
    return {"message": {USER_CREATED_SUCCESS}, "user_id": user.user_id}

#create login token
@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency):
    user = auth_services.authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=401, detail={INVALID_CREDENTIALS})
    token = auth_services.create_access_token(user.username, user.user_id, user.role, timedelta(minutes=20))
    return {"access_token": token, "token_type": "bearer"}

#get current user info
@router.get("/logged_in_user", status_code=status.HTTP_200_OK)
async def get_my_profile(current_user: Annotated[dict, Depends(get_current_user)], db: db_dependency):
    user = auth_services.get_user_profile(current_user["user_id"], db)
    if not user:
        raise HTTPException(status_code=404, detail={USER_NOT_FOUND})
    return {
        "user_id": user.user_id,
        "username": user.username,
        "email": user.email,
        "role": user.role,
        "phone":user.phone_number
    }

#get all user details
@router.get("/users", status_code=status.HTTP_200_OK)
async def get_all_users(db: db_dependency, current_user: Annotated[dict, Depends(get_current_user)]):
    if current_user["user_role"] != "admin":
        raise HTTPException(status_code=403, detail={ADMIN_ONLY_ACCESS})
    users = auth_services.get_all_users(db)
    return [
        {
            "user_id": user.user_id,
            "email": user.email,
            "username": user.username,
            "role": user.role,
            "phone":user.phone_number
        } for user in users
    ]
