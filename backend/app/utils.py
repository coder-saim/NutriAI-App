from passlib.context import CryptContext
import random
import smtplib
from email.message import EmailMessage
from .config import settings


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str):
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)




def get_otp_code(to_mail: str):
    otp = ""
    for _ in range(6):
        otp += str(random.randint(0,9))

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    from_mail = settings.secret_email
    server.login(from_mail, settings.app_token)
    
    msg = EmailMessage()
    msg['Subject' ] = "OTP Verification"
    msg['From' ]= from_mail
    msg['To'] = to_mail
    msg.set_content("Your OTP is: " + otp)

    server.send_message(msg)
    
    return otp

    