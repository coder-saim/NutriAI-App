from fastapi import Depends, FastAPI, HTTPException, Response, status
from . import models
from .database import engine
from .routers import user, auth, food, food_ai_model
from fastapi.middleware.cors import CORSMiddleware



models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




app.include_router(user.router)
app.include_router(auth.router)
app.include_router(food.router)
app.include_router(food_ai_model.router)


