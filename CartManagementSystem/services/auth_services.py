from datetime import datetime, timedelta, timezone
from jose import jwt
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from models.auth_model import Users
from core.config import SECRET_KEY,ALGORITHM
from schema.auth_schema import CreateUserRequest

SECRET_KEY = SECRET_KEY
ALGORITHM = 'HS256'
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")



def hash_password(password: str) -> str:
    return bcrypt_context.hash(password)

def authenticate_user(username: str, password: str, db: Session):
    user = db.query(Users).filter(Users.username == username).first()
    if not user or not bcrypt_context.verify(password, user.password):
        return None
    return user

def create_access_token(username: str, user_id: int, role: str, expires_delta: timedelta):
    to_encode = {"sub": username, "id": user_id, "role": role}
    expire = datetime.now(timezone.utc) + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def create_user(data: CreateUserRequest, db: Session):
    new_user = Users(
        email=data.email,
        username=data.username,
        role=data.role,
        password=hash_password(data.password),
        phone_number=data.phone_number
    )
    db.add(new_user)
    db.commit()
    return new_user

def get_user_profile(user_id: int, db: Session):
    return db.query(Users).filter(Users.user_id == user_id).first()

def get_all_users(db: Session):
    return db.query(Users).all()
