package com.solidprincipledemo.singleresponsibility.violated;
import java.util.Scanner;

public class PassengerDetails {

        public void showPassengerDetails(String name, String age, String boarding_pass_issued, String has_documents){
            System.out.println("Name: "+name);
            System.out.println("Age: "+age);
            System.out.println("Has Boardingpass: "+boarding_pass_issued);
            System.out.println("Has Valid Documents: "+has_documents);

        }
    public void checkInStatus(String boarding_pass_issued, String has_documents){
        if((boarding_pass_issued.equals("yes"))&&( has_documents.equals("yes"))){
            System.out.println("The passenger can Check-In");
        }
        else{
            System.out.println("The passenger does not have the required documents and cannot Check-In");
        }

    }
    }

