# ApaTechAufgabe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.


# Dataset

Added a service to retrieve data from local json files in order to simulate data fetched from a database as it would usually be the real case. As the proposed exercise implies a many-to-many relationship between the persons and tasks objects, every dataset's object has been assigned an id and an array of the ids from the related objects. I opted for using milliseconds for the duration property of the task object as it is usually the case.

# Solution

The proposed exercise is suited for a routing strategy based on sibling views, as the proposed images don't show a structure for fitting a parent-child strategy. The views for persons and tasks will lead to two different views for person details and task details. This has been implemented with routerLink based on a routing strategy using every object's id as path reference.

# Demo

https://apa-tech-aufgabe01.herokuapp.com/

