package com.solidprincipledemo.singleresponsibility.violated;
import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        String name,age,boarding_pass_issued,has_documents;
        Scanner sc =new Scanner(System.in);
        System.out.println("Enter your name:");
        name=sc.next();
        System.out.println("Enter your age:");
        age=sc.next();
        System.out.println("Has the boarding pass been issued?");
        boarding_pass_issued= sc.next();
        System.out.println("Does the passenger have valid documents?");
        has_documents=sc.next();
        PassengerDetails passengerDetails= new PassengerDetails();
        passengerDetails.showPassengerDetails(name,age,boarding_pass_issued,has_documents);
        passengerDetails.checkInStatus(boarding_pass_issued,has_documents);

    }
}
