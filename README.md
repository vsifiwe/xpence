# XPENCE

This React + Django application is an expense and income tracker that allows a user to create an account, expense and income categories and record transactions(Expense or Transaction) and provides corresponding reports.

## Installation

### Requirements

##### Backend

- Python 3

##### Frontend

- NodeJS
- NPM or Yarn

### Live Testing

- The backend is hosted on Heroku [on this link](https://xpence-django.herokuapp.com/)
- This frontend is deployed on Netlify on [this link](https://cocky-bhabha-4368d3.netlify.app/).

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

### Docker Documentation

**N.B:** For Docker, make sure to clone the `PROD` branch from [this link](https://github.com/vsifiwe/xpence)

In the React project directory, run this command `docker build -t xpence:latest .` to build the container

To run the container, run this command `docker run --name xpense -d -p 3000:3000 xpence:latest`

In the browser, you should be able to view the Application on localhost:3000.

### Screenshots

![Dashboard](https://github.com/vsifiwe/xpence/blob/master/screenshots/dashboard.png?raw=true)
![Login](https://github.com/vsifiwe/xpence/blob/master/screenshots/login.png?raw=true)
![Register](https://github.com/vsifiwe/xpence/blob/master/screenshots/register.png?raw=true)
![New Account](https://github.com/vsifiwe/xpence/blob/master/screenshots/new_account.png?raw=true)
![New Expense](https://github.com/vsifiwe/xpence/blob/master/screenshots/new_expense.png?raw=true)
![New Income](https://github.com/vsifiwe/xpence/blob/master/screenshots/new_income.png?raw=true)
