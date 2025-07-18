from pydantic import BaseModel,Field
from uuid import uuid4

class Token(BaseModel):
    access_token: str
    token_type: str

class CreateUserRequest(BaseModel):
    user_id: str = Field(default_factory=lambda: str(uuid4()))
    email: str = Field(...)
    username: str = Field(..., min_length=3, max_length=30)
    password: str = Field(..., min_length=6, max_length=128)
    role: str = Field(...)
    phone_number: str = Field(...)