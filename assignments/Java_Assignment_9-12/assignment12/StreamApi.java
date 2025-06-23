package com.assignments.assignment12;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class StreamApi {
        public static void main(String[] args) {
            List<Student> students = Arrays.asList(
                    new Student(111, "Jiya Brein", 17, "Female", "Computer Science", 2018, 70.8),
                    new Student(122, "Paul Niksui", 18, "Male", "Mechanical", 2016, 50.2),
                    new Student(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3),
                    new Student(144, "Murali Gowda", 18, "Male", "Electrical", 2018, 80),
                    new Student(155, "Nima Roy", 19, "Female", "Textile", 2016, 70),
                    new Student(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70),
                    new Student(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70),
                    new Student(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80),
                    new Student(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85),
                    new Student(200, "Jaden Dough", 18, "Male", "Security", 2015, 82),
                    new Student(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83),
                    new Student(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4),
                    new Student(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6),
                    new Student(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8),
                    new Student(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4),
                    new Student(266, "Sanvi Pandey", 17, "Female", "Electric", 2019, 72.4),
                    new Student(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5)
            );

            // 1. Print the name of all departments in the college
            System.out.println("Departments:");
            students.stream()
                    .map(Student::getEngDepartment)
                    .distinct()
                    .forEach(System.out::println);

            // 2. Students who enrolled after 2018
            System.out.println("\nStudents enrolled after 2018:");
            students.stream()
                    .filter(s -> s.getYearOfEnrollment() > 2018)
                    .map(Student::getName)
                    .forEach(System.out::println);

            // 3. Male students in Computer Science
            System.out.println("\nMale students in Computer Science:");
            students.stream()
                    .filter(s -> s.getGender().equalsIgnoreCase("Male"))
                    .filter(s -> s.getEngDepartment().equalsIgnoreCase("Computer Science"))
                    .forEach(System.out::println);

            // 4. Count male and female students
            System.out.println("\nCount by Gender:");
            Map<String, Long> genderCount = students.stream()
                    .collect(groupingBy(Student::getGender, counting()));
            genderCount.forEach((gender, count) -> System.out.println(gender + ": " + count));

            // 5. Average age of male and female students
            System.out.println("\nAverage Age by Gender:");
            Map<String, Double> avgAge = students.stream()
                    .collect(groupingBy(Student::getGender, averagingInt(Student::getAge)));
            avgAge.forEach((gender, avg) -> System.out.println(gender + ": " + avg));

            // 6. Student with highest percentage
            System.out.println("\nTop Performer:");
            students.stream()
                    .max(Comparator.comparingDouble(Student::getPerTillDate))
                    .ifPresent(System.out::println);

            // 7. Count students in each department
            System.out.println("Students per Department:");
            Map<String, Long> countByDept = students.stream()
                    .collect(groupingBy(Student::getEngDepartment, counting()));
            countByDept.forEach((dept, count) -> System.out.println(dept + ": " + count));

            // 8. Average percentage per department
            System.out.println("\nAverage Percentage per Department:");
            Map<String, Double> avgPerDept = students.stream()
                    .collect(groupingBy(Student::getEngDepartment, averagingDouble(Student::getPerTillDate)));
            avgPerDept.forEach((dept, avg) -> System.out.println(dept + ": " + avg));

            // 9. Youngest male student in Electronic dept
            System.out.println("\nYoungest Male in Electronic Department:");
            students.stream()
                    .filter(s -> s.getGender().equalsIgnoreCase("Male"))
                    .filter(s -> s.getEngDepartment().equalsIgnoreCase("Electronic"))
                    .min(Comparator.comparingInt(Student::getAge))
                    .ifPresent(System.out::println);

            // 10. Male and Female count in Computer Science department
            System.out.println("\nGender Count in Computer Science:");
            Map<String, Long> csGenderCount = students.stream()
                    .filter(s -> s.getEngDepartment().equalsIgnoreCase("Computer Science"))
                    .collect(groupingBy(Student::getGender, counting()));
            csGenderCount.forEach((gender, count) -> System.out.println(gender + ": " + count));
        }
    }

