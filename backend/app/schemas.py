from pydantic import BaseModel, EmailStr
from datetime import date, datetime
from typing import List, Optional
from pydantic.types import conint



class FoodBase(BaseModel):
    name: str
    image_url: str


class FoodCreate(FoodBase):
    pass


class FoodOut(FoodBase):
    id: int
    created_at: datetime


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class Login(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    type: Optional[str]
    name: str
    email: str
    phone: Optional[str]
    weight: Optional[float]
    age: Optional[int]
    height: Optional[float]
    gender_id: Optional[int]
    diabetes_type_id: Optional[int]
    activity_level_id: Optional[int]
    password_reset_tokens: Optional[datetime]
    failed_login_attempts: Optional[datetime]
    account_lockouts: Optional[bool]
    subscribed: Optional[bool]
    subscription_validity: Optional[date]
    created_at: Optional[datetime]

    class Config:
        from_attributes = True



class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    id: Optional[int] = None



class Auth(BaseModel):
    username: str
    password: str

class Email(BaseModel):
    email: str


class OTP(BaseModel):
    email: str
    input_otp: int

