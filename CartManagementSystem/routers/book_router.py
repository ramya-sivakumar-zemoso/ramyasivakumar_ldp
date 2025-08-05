from fastapi import APIRouter ,HTTPException
from models.book_model import BooksTable
from schema.book_schema import Books
from utils.utils import db_dependency
from starlette import status
from services import book_services

router=APIRouter(prefix="/books", tags=['Books'])

@router.get("/{book_id}",response_model=Books)
def get_book_by_id(book_id:int , db:db_dependency):
    return book_services.get_book_by_id(book_id,db)


@router.post("/add_new_book",response_model=Books,status_code=status.HTTP_201_CREATED)
async def new_book(book:Books,db:db_dependency):
    return book_services.add_new_book(book,db)

