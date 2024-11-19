from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from sqlalchemy import func
from sqlalchemy.orm import Session
from typing import List, Optional
from .. import models, schemas, oauth2
from ..database import get_db


router = APIRouter(
    prefix="/foods",
    tags=['Foods']
)

@router.get("/", response_model=List[schemas.FoodOut])
def get_foods(db: Session = Depends(get_db), limit: int = 10, skip: int = 0, search: Optional[str] = '', user = Depends(oauth2.get_current_user)):
    # print(user.name,user.email)
    foods = db.query(models.Food).filter(models.Food.name.contains(search)).limit(limit).offset(skip).all()
    return foods


# @router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.FoodOut)
# def create_food(food: schemas.FoodCreate,db: Session = Depends(get_db)):
#     new_food = models.Food(**food.dict())
#     db.add(new_food)
#     db.commit()
#     db.refresh(new_food)
#     return new_food
    

# @router.get("/{id}",status_code=200, response_model=schemas.FoodOut)
# def get_food(id: int,db: Session = Depends(get_db)):
#     food = db.query(models.Food).filter(models.Food.id == id).first()

#     if food == None:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND, detail='Oops! food not found!')
#     return food






