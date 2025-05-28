package com.solidimplementation.signleresponsibility;
import java.util.*;

public class CalculateSalary {
    public static double CalculateSalary( int days , int perdaywage){
        double Salary = days * perdaywage;
        return Salary;
    }
    public static void main(String[] args){
        double Salary;
        int days;
        int perdaywage;

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of days of work:");
        days = sc.nextInt();
        System.out.print("Enter per day Wage amount:");
        perdaywage = sc.nextInt();
        Salary = CalculateSalary(days,perdaywage);
        GeneratePayRoll generatePayRoll = new GeneratePayRoll();
        generatePayRoll.payRoll(Salary);

    }
}
