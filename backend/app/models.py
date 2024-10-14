from sqlalchemy import BigInteger, Column, Date, Double, Integer, LargeBinary, String, Boolean, ForeignKey, Text, Time
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from .database import Base

class User(Base):
    __tablename__ = 'users' 
    
    id = Column(BigInteger, primary_key=True, index=True)
    type = Column(Text, nullable=False)
    name = Column(Text, nullable=False)
    email = Column(Text, nullable=False)
    password = Column(Text, nullable=False)
    phone = Column(Text, nullable=True)
    gender_id = Column(BigInteger, ForeignKey("gender.id", ondelete="CASCADE"), nullable=True)
    weight = Column(Double, nullable=True)
    age = Column(Integer, nullable=True)
    height = Column(Double, nullable=True)
    diabetes_type_id = Column(BigInteger, ForeignKey("diabetes_type.id", ondelete="CASCADE"), nullable=False)
    activity_level_id = Column(BigInteger, ForeignKey("activity_level.id", ondelete="CASCADE"), nullable=False)
    password_reset_tokens = Column(Text, nullable=True)
    failed_login_attempts = Column(TIMESTAMP, nullable=True)
    account_lockouts = Column(Boolean, nullable=True)
    subscribed = Column(Boolean, nullable=True)
    subscription_validity = Column(Date, nullable=True)
    created_at = Column(TIMESTAMP, nullable=True)
    
    gender = relationship("Gender")
    diabetes_type = relationship("Diabetes_Type")
    activity_level = relationship("Activity_Level")


class Gender(Base):
    __tablename__ = 'gender'
    
    id = Column(BigInteger, primary_key=True)
    type = Column(Text, nullable=False)
    


class Diabetes_Type(Base):
    __tablename__ = 'diabetes_type'
    
    id = Column(BigInteger, primary_key=True)
    type = Column(Text, nullable=False)
    


class Activity_Level(Base):
    __tablename__ = 'activity_level'
    
    id = Column(BigInteger, primary_key=True)
    level = Column(Text, nullable=False)
    


class Meal(Base):
    __tablename__ = 'meal'
    
    id = Column(BigInteger, primary_key=True)
    user_id = Column(BigInteger, ForeignKey("users.id"), nullable=False)
    type = Column(Text, nullable=False)
    total_carbohydrate = Column(Double, nullable=False)
    total_protein = Column(Double, nullable=False)
    total_fats = Column(Double, nullable=False)
    total_calories = Column(Double, nullable=False)
    created_at = Column(TIMESTAMP, nullable=False)
    
    user = relationship("User", back_populates="meals")


class Meal_Recommendation(Base):
    __tablename__ = 'meal_recommendation'
    
    id = Column(BigInteger, primary_key=True)
    user_id = Column(BigInteger, ForeignKey("users.id"), nullable=False)
    meal_id = Column(BigInteger, ForeignKey("meal.id"), nullable=False)
    reason = Column(Text, nullable=False)
    category = Column(Text, nullable=False)
    recommended_at = Column(TIMESTAMP, nullable=False)
    
    user = relationship("User")
    meal = relationship("Meal")



class Reminder(Base):
    __tablename__ = 'reminder'
    
    id = Column(BigInteger, primary_key=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    type = Column(Text, nullable=False)
    recurrence_patterns = Column(Text, nullable=True)
    status = Column(Text, nullable=False)
    message = Column(Text, nullable=False)
    date = Column(Date, nullable=False)
    time = Column(Time, nullable=False)
    
    user = relationship("User")


class Report(Base):
    __tablename__ = 'report'
    
    id = Column(BigInteger, primary_key=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    report = Column(Text, nullable=False)
    file = Column(LargeBinary, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    
    user = relationship("User")


class Tracking_Activity(Base):
    __tablename__ = 'tracking_activity'
    
    id = Column(BigInteger, primary_key=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    date = Column(Date, nullable=False)
    glucose_level = Column(Double, nullable=False)
    calorie = Column(Double, nullable=False)
    carbohydrate = Column(Double, nullable=False)
    protein = Column(Double, nullable=False)
    fat = Column(Double, nullable=False)
    
    user = relationship("User")


class Food(Base):
    __tablename__ = 'food'
    
    id = Column(BigInteger, primary_key=True)
    name = Column(Text, nullable=False)
    calories = Column(Double, nullable=True)
    carbohydrate = Column(Double, nullable=True)
    protein = Column(Double, nullable=True)
    fat = Column(Double, nullable=True)


class Meal_History(Base):
    __tablename__ = 'meal_history'
    
    id = Column(BigInteger, primary_key=True)
    meal_id = Column(BigInteger, ForeignKey("meal.id", ondelete="CASCADE"), nullable=False)
    food_id = Column(BigInteger, ForeignKey("food.id", ondelete="CASCADE"), nullable=False)
    consumed_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    
    meal = relationship("Meal")
    food = relationship("Food")



class User_Data_History(Base):
    __tablename__ = 'user_data_history'
    
    id = Column(BigInteger, primary_key=True)
    user_id = Column(BigInteger, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    weight = Column(Double, nullable=False)
    height = Column(Double, nullable=False)
    diabetes_type = Column(Text, nullable=False)
    activity_level = Column(Text, nullable=False)
    
    user = relationship("User")
