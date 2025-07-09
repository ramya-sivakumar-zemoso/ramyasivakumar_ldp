from fastapi import FastAPI,Request
from routers import auth_router, cart_router
from exceptions.exception import validation_exception_handler  
from fastapi.exceptions import RequestValidationError
from routers import products_router
from database.database import engine , Base
import time

app=FastAPI()

Base.metadata.create_all(bind=engine)

app.add_exception_handler(RequestValidationError, validation_exception_handler)

app.include_router(products_router.router)
app.include_router(auth_router.router)
app.include_router(cart_router.router)


@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()  
    response = await call_next(request)
    duration = time.time() - start_time
    print(f"{request.method} {request.url.path} completed in {duration:.4f}s")
    return response