from fastapi import HTTPException
from sqlalchemy.orm import Session
from starlette import status
from models.book_model import BooksTable
from schema.book_schema import Books




def get_book_by_id(book_id:int ,db:Session):
    book=db.query(BooksTable).filter(BooksTable.id==book_id).first()
    return book


def add_new_book(new_book:Books,db:Session):
    new_book=BooksTable(
        id=new_book.id,
        name=new_book.name,
        author=new_book.author
    )
    db.add(new_book)
    db.commit()
    return new_book