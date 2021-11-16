# A simple Todo application built with Node and React


# Routes
| Route  | Method  | Desc | 
| :------------ |:---------------:| -----:|
| /todo/todos    | GET  | get all todos |
| /todo/:todoId| PUT    | update todo status|
		
# Tests:
tests is written for server using jest and supertest whereas tests is written for client using jest, enzyme and react testing library

# How to run the app locally:
First go inside client folder and create .env file. Add SKIP_PREFLIGHT_CHECK=true inside file. To run the application write "npm run start-application" it will start both server and client concurrently


# How to run the tests:
To run the test wite "npm test"

