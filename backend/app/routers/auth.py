from fastapi import APIRouter, Depends, status, HTTPException, Response
from fastapi.responses import JSONResponse
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import database, schemas, models, utils, oauth2

router = APIRouter(tags=['Authentication'])


@router.post('/users/login', response_model=schemas.Token, status_code=status.HTTP_200_OK)
# def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(database.get_db)):
def login(user_credentials: schemas.Auth, db: Session = Depends(database.get_db)):

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
def email_verification(emailObj: schemas.Email, db: Session = Depends(database.get_db)):
    email = emailObj.email 
    user = db.query(models.User).filter(models.User.email == email).first()
    if user == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail='Oops! user not found!')

    otp_code = utils.get_otp_code(email)
    user.password_reset_tokens = otp_code
    db.commit()

    return {"message": "Otp code sent to your email."}
    

@router.post('/users/otp_verification', status_code=status.HTTP_200_OK)
def otp_verification(otpObj: schemas.OTP, db: Session = Depends(database.get_db)):

    user = db.query(models.User).filter(models.User.email == otpObj.email).first()
    if user == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail='Oops! user not found!')
    
    if int(user.password_reset_tokens) == otpObj.input_otp:
        user.password_reset_tokens = None
        db.commit()
        return {"message": "OTP Verification successful."}
    else:
        return JSONResponse(content={"message": "Oops! Invalid OTP verification!"}, status_code=404)
        
