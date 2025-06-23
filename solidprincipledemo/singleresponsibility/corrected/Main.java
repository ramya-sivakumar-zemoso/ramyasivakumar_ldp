package com.solidprincipledemo.singleresponsibility.corrected;

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
        Passengers passengers= new Passengers();
        passengers.showPassengerDetails(name,age,boarding_pass_issued,has_documents);
        CheckinService checkinService= new CheckinService();
        checkinService.checkInStatus(boarding_pass_issued,has_documents);

    }
}
