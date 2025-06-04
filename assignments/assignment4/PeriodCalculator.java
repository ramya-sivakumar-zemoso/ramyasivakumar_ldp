package com.assignments.assignment4;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class PeriodCalculator {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        System.out.println("Enter the number of inputs");
        int input= scanner.nextInt();
        String[] signupArray= new String[input];
        String[] currentArray = new String[input];
        scanner.nextLine();
        System.out.println("Enter the values:");
        for(int i=0;i<input;i++){
            signupArray[i]=scanner.next();
            currentArray[i]=scanner.next();
        }
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        for(int i=0;i<input;i++){
            LocalDate signupDate = LocalDate.parse(signupArray[i], formatter);
            LocalDate currentDate = LocalDate.parse(currentArray[i],formatter);
            if(signupDate.plusYears(1).isAfter(currentDate)){
                System.out.println("No range");
                continue;
            }
            LocalDate currentAnniversary =signupDate.plusYears(currentDate.getYear() - signupDate.getYear());
            LocalDate plus30= currentAnniversary.plusDays(30);
            LocalDate minus30 = currentAnniversary.minusDays(30);
            if(plus30.isAfter(currentDate)){
                System.out.println(minus30.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")) + " " + currentDate.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
            }
            else
                System.out.println(minus30.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")) + " " + plus30.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
  }
    }
}