# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |     |
| ----------------------------------------------------- | ------ | --- |
| DB                                                    |        |     |
| - neondb created                                      | 10     | 10  |
| Routes                                                |        |     |
| - api CRUD endpoints added for orders                 | 10     | 10  |
| Server                                                |        |     |
| - sequelize or mongo dependencies added               | 10     | 10  |
| - successfully connect to db                          | 10     | 10  |
| Create Database Objects Definitions                   |        |     |
| - User                                                | 10     | 10  |
| - Product                                             | 10     | 10  |
| - Order                                               | 10     | 10  |
| Change your service classes use your Database objects |        |     |
| - User                                                | 10     | 10  |
| - Product                                             | 10     | 10  |
| - Order                                               | 10     | 10  |

## Total Score: 100 / 100

Excellent job Jessica! You even go the bonus. 

One thing to keep in mind.  Don't let the client supply the id on create.
To ensure uniquesness, you should generate the id on the server or let the
db autoincrement.  You can fix this by simply removing id model defintion.  
Sequelize will then do this for you.


