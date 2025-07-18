from pydantic import BaseModel,Field

class Books(BaseModel):
    id:int = Field(gt=0)
    name:str = Field(min_length= 3)
    author:str

    class Config:
        orm_mode=True



