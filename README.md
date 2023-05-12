### This Microservices project consists of four independent services

### posts
This service handles the creation and retrieval of posts. It was built using the following technologies: Python (Django) and SQLite. It runs on port 8000.

To test the service follow the followig instructions:
    run: pipenv shell  (make sure you downloaded pipenv in your local machine)
         pipenv install -r requirements  
         python manage.py makemigrations
         python manage.py migrate
         python manage.py runserver

### comments
This service handles the creation and retrieval of comments. It was built using the following technologies: JavaScript (Node.js) and MongoDB. It runs on port 8001.

To test the service follow the followig instructions:
    run: npm install
         npm start

### comments-moderation
This service handles the update of comments status. It was built using the following technologies: Python (Django) and SQLite. It runs on port 8004.

**I am still working on it** 

    To test the service follow the followig instructions:

    run: 
    	pipenv shell  (make sure you downloaded pipenv in your local machine)
    	pipenv install -r requirements 
    	python manage.py makemigrations
        python manage.py migrate
        python manage.py runserver 8004


### event-bus
This service handles the events come from different services. It was built using the following technologies: JavaScript (Node.js). It runs on port 8002.

To test the service follow the followig instructions:
    run: npm install
         npm start

### query
This service handles the creation and retrieval of posts and comments, syncing the data (posts and comments) in case a service goes down. It also ser. It was built using the following technologies: JavaScript (Node.js) and MongoDB. It runs on port 8003.

To test the service follow the followig instructions:
    run: npm install
         npm start

### frontend
This service handles the frontend (rendering posts and comments, allow users to add post and comment, navigate in pages). It was built using React JS. It runs on port 3000.

To test the service follow the followig instructions:
    run: npm install
         npm start
