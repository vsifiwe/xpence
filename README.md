# XPENCE

This React + Django application is an expense and income tracker that allows a user to create an account, expense and income categories and record transactions(Expense or Transaction) and provides corresponding reports.

## Installation

### Requirements

##### Backend

- Python 3

##### Frontend

- NodeJS
- NPM or Yarn

### Local Machine testing

You are going to have to setup both the backend. Don't worry, it is super easy.

##### Backend

- Clone [this](https://github.com/vsifiwe/xpence-backend) project from GitHub to your local machine
- In the project directory, activate the environment using `source Scripts/activate` on Linux
- Install required dependencies using `pip install -r requirements.txt`
- After that is done, create migrations using `python manage.py makemigrations`
- Migrate using `python manage.py migrate`
- Every thing should be done, now you can run the server using `python manage.py runserver`
- Open [http://localhost:8000](http://localhost:8000) to test it.

##### Frontend

- Clone [vsifiwe/xpence (github.com)](https://github.com/vsifiwe/xpence) from GitHub to your Local machine
- In the project directory, install dependencies using `npm install`
- After successfully installing, run `npm run start` to run the project

### Swagger Documentation

The swagger documentation is hosted [on this link](https://xpence-django.herokuapp.com/)

### Deployment

- The backend is hosted on Heroku [on this link](https://xpence-django.herokuapp.com/)
- This project is deployed on Heroku on [this link](https://x-press-publish.herokuapp.com).
