# trello_board
# frontEnd

Trello Board is a simple task managment application built using react and+ spring boot + mysql
user can add,edit,delete and drag and drop tasks between columns

frontEnd setup
1) clone it from the repository
2) After cloning npm install
3) to start the project - npm run dev it runs in http://localhost:5173

<!-- Operations -->
+ button 
Add New Tasks in todos
in that same column there is a 'x' button and a pencil button is present
'x' button is for deleteing the tasks and the pencil is to edit the task.

Edit Operation is like click on the pencil button and the column will be editable and we can enter what the changes we need and press enter to apply the change 

Drag and drop operation is working like click and drag and drop inside another column 

#backEnd

##  Database Setup

```sql
CREATE DATABASE trello_db;

CREATE TABLE tasks (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    status VARCHAR(50)
);

backend is done on java 8 and springBoot 2.7.18
Backend the Project structure is not like as you have mentioned in the Assignment
Rest api are used to handle the CRUD operations

#
##Database rows are title and status
title means the name and status means wheather the task is in todo,inprogress and completed currently it is in varchar 

#
API flow
React -> Axios -> springController -> Services -> Repository -> Mysql
