# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (70 points)

| Requirement                                                 | Points |     |
| ----------------------------------------------------------- | ------ | --- |
| Github                                                      |        |     |
| - code is on the main branch                                | 5      | 5   |
| - node_modules is not in the repository                     | 5      | 0   |
| Routes                                                      |        |     |
| - api CRUD endpoints added for users                        | 10     | 8   |
| - api CRUD endpoints added for products                     | 10     | 8   |
| - api login endpount added                                  | 10     | 8   |
| - routes are refactored router modules                      | 15     | 15  |
| Data                                                        |        |     |
| - user data is moved under data folder                      | 5      | 0   |
| - product data is moved under data folder                   | 5      | 0   |
| Service Classes                                             |        |     |
| - create a User Service for CRUD operations                 | 10     | 8   |
| - create a Product Service for CRUD operations              | 10     | 8   |
| - create an AuthenticationService for simple authentication | 15     | 13  |

## Total Score: 73 / 100

### Comments:

Overall good work Jessica. Overall eveything works! Just a few things to keep in mind. Firstly the Services should not send the response as that is the job of the route. For example, if you wanted to use your user service for the page routes it would not work since it now returns JSON. The services are really just for business logic and getting data.

One other thing to keep in mind:

`const products = JSON.parse(fs.readFileSync('fakeProducts.json', 'utf8'));`

can just be

`const products = require('./fakeProducts.json')`

BTW - I have not forgotten your other assignment. Will do it once i get through all third assignments.
