create database normalisation_demo;
use normalisation_demo;

CREATE TABLE StudentCourseActivity_UNF (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100),
    Courses VARCHAR(255),     
    Activities VARCHAR(255)   
);

INSERT INTO StudentCourseActivity_UNF VALUES
(101, 'Ramya', 'DBMS,Networks', 'Dance,Music'),
(102, 'Aarav', 'DBMS', 'Music'),
(103, 'Kavya', 'Networks,AI', 'Dance,Drama,Sports');


CREATE TABLE StudentCourseActivity_1NF (
    StudentID INT,
    StudentName VARCHAR(100),
    Course VARCHAR(100),
    Activity VARCHAR(100),
    PRIMARY KEY (StudentID, Course, Activity)
);

INSERT INTO StudentCourseActivity_1NF VALUES
(101, 'Ramya', 'DBMS', 'Dance'),
(101, 'Ramya', 'DBMS', 'Music'),
(101, 'Ramya', 'Networks', 'Dance'),
(101, 'Ramya', 'Networks', 'Music'),
(102, 'Aarav', 'DBMS', 'Music'),
(103, 'Kavya', 'Networks', 'Dance'),
(103, 'Kavya', 'Networks', 'Drama'),
(103, 'Kavya', 'Networks', 'Sports'),
(103, 'Kavya', 'AI', 'Dance'),
(103, 'Kavya', 'AI', 'Drama'),
(103, 'Kavya', 'AI', 'Sports');

CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100)
);

CREATE TABLE StudentCourseActivity_2NF (
    StudentID INT,
    Course VARCHAR(100),
    Activity VARCHAR(100),
    PRIMARY KEY (StudentID, Course, Activity),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID)
);

INSERT INTO Student VALUES
(101, 'Ramya'),
(102, 'Aarav'),
(103, 'Kavya');

INSERT INTO StudentCourseActivity_2NF VALUES
(101, 'DBMS', 'Dance'),
(101, 'DBMS', 'Music'),
(101, 'Networks', 'Dance'),
(101, 'Networks', 'Music'),
(102, 'DBMS', 'Music'),
(103, 'Networks', 'Dance'),
(103, 'Networks', 'Drama'),
(103, 'Networks', 'Sports'),
(103, 'AI', 'Dance'),
(103, 'AI', 'Drama'),
(103, 'AI', 'Sports');

CREATE TABLE Course (
    Course VARCHAR(100) PRIMARY KEY,
    InstructorName VARCHAR(100)
);

CREATE TABLE Activity (
    Activity VARCHAR(100) PRIMARY KEY,
    ActivityLocation VARCHAR(100)
);

INSERT INTO Course VALUES
('DBMS', 'Dr. Rao'),
('Networks', 'Dr. Sharma'),
('AI', 'Dr. Mehta');

INSERT INTO Activity VALUES
('Dance', 'Hall A'),
('Music', 'Hall B'),
('Drama', 'Hall C'),
('Sports', 'Ground 1');

CREATE TABLE StudentCourse (
    StudentID INT,
    Course VARCHAR(100),
    PRIMARY KEY (StudentID, Course),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (Course) REFERENCES Course(Course)
);

CREATE TABLE StudentActivity (
    StudentID INT,
    Activity VARCHAR(100),
    PRIMARY KEY (StudentID, Activity),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (Activity) REFERENCES Activity(Activity)
);

INSERT INTO StudentCourse VALUES
(101, 'DBMS'),
(101, 'Networks'),
(102, 'DBMS'),
(103, 'Networks'),
(103, 'AI');

INSERT INTO StudentActivity VALUES
(101, 'Dance'),
(101, 'Music'),
(102, 'Music'),
(103, 'Dance'),
(103, 'Drama'),
(103, 'Sports');

SELECT * FROM StudentCourseActivity_UNF;
SELECT * FROM StudentCourseActivity_1NF ORDER BY StudentID;
SELECT * FROM Student;
SELECT * FROM StudentCourseActivity_2NF ORDER BY StudentID;
SELECT * FROM Course;
SELECT * FROM Activity;
SELECT * FROM StudentCourse ORDER BY StudentID;
SELECT * FROM StudentActivity ORDER BY StudentID;
