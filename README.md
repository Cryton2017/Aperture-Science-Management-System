# Aperture Science Management System

This application has been created to assist Aperture Science keep track of its test subjects and to administer questionaires
more easily.

This application has been developed using the following:

---

| Framework/Language |    For    |                                                                                               Reason                                                                                                | Substitute |
|--------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|       React        | Front End | As stated in the instructions, react is used by intelliHR for front end development.                                                                                                        |    None     |
|        PHP         | Back End  | As stated in the instructions, PHP is used for the back end, though the framework is Laraval.I am confident that with more time, I could have toaught myself enough Laraval to create my solution.               | PHP Laraval  |
|       MySQL        | Database  | Although it has been stated that intelliHR use Postgres, I used MySQl as it was already configured. I am confident that with more time, I would have been able to configure a Postgress Database Server.    |    Postgres |

---

### User Stories Implemented
| ID | Story Description                                                                                                             | Priority    | Details                                                                 |
|----|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------------------------------------------------------|
| 1  | As GLaDOS, I can log in to the application                                                                                    | Must have   | Login requires username and password                                    |
| 2  | As a Subject, I can log in to the application                                                                                 | Must have   | Login requires test subject ID and password                             |

---

### User Stories to implement (in order)
| ID | Story Description                                                                                                             | Priority    | Details                                                                 |  Time to Complete  |
|----|-------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------------------------------------------------------|-------------------|
| 3  | As GLaDOS, I can edit the questions in the questionnaire                                                                      | Could have  |                                                                         |   1 hour          |
| 4  | As a Subject, I can submit testing data (questionnaires)                                                                      | Must have   | Must capture date,      Testing data based on stored testing parameters |   2 hours         |
| 6  | As a Subject, I can only view my own testing data (historical   questionnaire submissions)                                    | Must have   |                                                                         |   1 hour          |
| 5  | As GLaDOS, I can view all test subjects' data                                                                                 | Must have   |                                                                         |   0.5 hours       |
| 7  | As GLaDOS, I can ~~capture~~ register new test subjects                                                                       | Should have | Maximum of 10 subjects alive at once.                                   |   2 hours         |
| 8  | As GLaDOS, I can filter and sort test subjects based on their metadata                                                        | Should have |                                                                         |   3 hours         |
| 9  | As a facility manager, I can retrieve the Subject Number of the subject   that has submitted the most data and is still alive | Could have  | Must be via API with basic authorization                                |   1 hour          |
| 10 | As a facility manager, I can test the new testing management system (unit   tests)                                            | Could have  |                                                                         |   4 hours         |
| 11 | As a facility manager, I can deploy the new system in a docker container                                                      | Could have  |                                                                         |   2 hours         |

The above table depicts the order in which I would implement the remaining user stories and the time I feel it would take.

---

### Testing
Testing is an importnat part of software development. I have conducted interface testing and user testing. I have not conudcted unit testing. In my previous experience, I have performed unit testing using JUnit. I have not had the ooportunity to develop my skills in Unit Testing for PHP or React. I am confident that I can quickly aquire these skills.

### Other Notes
Implementing user stories that involve user inputs requries more time in my opinion as both client side and server side data validation are required for security purposes. I was more generous with the time for the final two user stories as I would need to conduct research and find tutorials on how to implement unit tests for PHP and React along with using Docker to containerise the application.
