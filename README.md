#### This Microservices project consists of four independent services

##### posts
This service handles the creation and retrieval of posts. It was built using the following technologies: Python (Django) and SQLite. It runs on port 8000.

##### comments
This service handles the creation and retrieval of comments. It was built using the following technologies: JavaScript (Node.js) and MongoDB. It runs on port 8001.

##### comments-moderation
This service handles the update of comments status. It was built using the following technologies: Python (Django) and SQLite. It runs on port 8004.
###### I am still working on it

##### event-bus
This service handles the events come from different services. It was built using the following technologies: JavaScript (Node.js). It runs on port 8002.

##### query
This service handles the creation and retrieval of posts and comments, syncing the data (posts and comments) in case a service goes down. It also ser. It was built using the following technologies: JavaScript (Node.js) and MongoDB. It runs on port 8003.

##### frontend
This service handles the frontend (rendering posts and comments, allow users to add post and comment, navigate in pages). It was built using React JS. It runs on port 3000.
