from fastapi import Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from utils.constants import INVALID_INPUT 

async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=400,
        content={
            "error": INVALID_INPUT,  
            "details": exc.errors()  
        }
    )
