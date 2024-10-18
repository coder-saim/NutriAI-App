from fastapi import APIRouter, Depends, status, HTTPException, Response
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import database, schemas, models, utils, oauth2

router = APIRouter(tags=['Authentication'])
global otp_code

@router.post('/users/login', response_model=schemas.Token)
def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(database.get_db)):
# def login(user_credentials: schemas.Auth, db: Session = Depends(database.get_db)):

    user = db.query(models.User).filter(
        models.User.email == user_credentials.username).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    if not utils.verify_password(user_credentials.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials")

    

    access_token = oauth2.create_access_token(data={"user_id": user.id})

    return {"access_token": access_token, "token_type": "bearer"}
     



@router.post('/users/email_verification', status_code=status.HTTP_200_OK)
def email_verification(email: str):
    global otp_code
    otp_code = utils.get_otp_code(email)

    return {"message": "Email sent."}
    

@router.post('/users/otp_verification', status_code=status.HTTP_200_OK)
def otp_verification(input_otp: int):
    if int(otp_code) == input_otp:
        return {"message": "OTP Verification successful."}
    else:
        return {"message": "Invalid OTP verification."}
