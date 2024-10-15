# NutriAI Backend

To list all the installed package run the command:
```bash
pip freeze > requirements.txt
```


To install all the packages run the command:
```bash
pip install -r requirements.txt
```

To run the server execute the command:
```bash
python -m venv venv
source venv/Scripts/activate
uvicorn app.main:app --reload
```
 