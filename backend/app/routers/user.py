from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List, Optional
from .. import models, schemas, utils
from ..database import get_db


router = APIRouter(
    prefix="/users",
    tags=['Users']
)

@router.post("/register", status_code=status.HTTP_201_CREATED, response_model=schemas.UserOut)
def sign_up(user: schemas.UserCreate, db: Session = Depends(get_db)):
    
    user_query = db.query(models.User).filter(models.User.email == user.email).first()
    
    if user_query:
        raise HTTPException(
            status_code=status.HTTP_208_ALREADY_REPORTED, detail='Oops! user already exists!')
    

    hashed_password = utils.hash_password(user.password)
    user.password = hashed_password
    
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

 
 

@router.get("/{id}",status_code=status.HTTP_200_OK, response_model=schemas.UserOut)
def get_user(id: int,db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == id).first()
    if user == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail='Oops! user not found!')
    return user



@router.put('/reset_password', status_code=status.HTTP_200_OK)
def reset_password(auth: schemas.Auth, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == auth.username).first()
    if user == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail='Oops! user not found!')

    hashed_password = utils.hash_password(auth.password)
    user.password = hashed_password
    db.commit()

    return {"message": "Password reset."}




