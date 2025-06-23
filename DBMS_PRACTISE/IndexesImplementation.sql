CREATE DATABASE INDEXES;
USE INDEXES;
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    department VARCHAR(100),
    city VARCHAR(100)
);

INSERT INTO students (student_id, name, age, department, city) VALUES
(1, 'Ramya', 20, 'IT', 'Pune'),
(2, 'Arjun', 21, 'CSE', 'Mumbai'),
(3, 'Priya', 22, 'ECE', 'Chennai'),
(4, 'Kiran', 21, 'EEE', 'Bangalore'),
(5, 'Sneha', 22, 'IT', 'Delhi'),
(6, 'Rahul', 23, 'MECH', 'Hyderabad'),
(7, 'Anjali', 21, 'CIVIL', 'Kolkata'),
(8, 'Vikram', 24, 'IT', 'Pune'),
(9, 'Meera', 22, 'CSE', 'Mumbai'),
(10, 'Amit', 23, 'EEE', 'Bangalore');

EXPLAIN SELECT * FROM students WHERE department = 'IT';

CREATE INDEX idx_department ON students(department);

EXPLAIN SELECT * FROM students WHERE department = 'IT';

DROP INDEX idx_department ON students;
