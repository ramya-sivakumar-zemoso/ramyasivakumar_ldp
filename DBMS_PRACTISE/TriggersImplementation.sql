create database Triggers;
use Triggers;
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Marks INT
);

INSERT INTO Students VALUES (1, 'Ramya', 85);
INSERT INTO Students VALUES (2, 'Reeta', 78);

CREATE TABLE MarksLog (
    LogID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    OldMarks INT,
    NewMarks INT,
    ChangeDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

CREATE TRIGGER trg_log_marks_update
BEFORE UPDATE ON Students
FOR EACH ROW
BEGIN
    IF OLD.Marks != NEW.Marks THEN
        INSERT INTO MarksLog (StudentID, OldMarks, NewMarks)
        VALUES (OLD.StudentID, OLD.Marks, NEW.Marks);
    END IF;
END;
//

DELIMITER ;

UPDATE Students SET Marks = 90 WHERE StudentID = 1;
UPDATE Students SET Marks = 78 WHERE StudentID = 2;
UPDATE Students SET Marks = 82 WHERE StudentID = 2;

SELECT * FROM MarksLog;

