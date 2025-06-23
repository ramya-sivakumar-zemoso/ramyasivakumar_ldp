package com.solidprincipledemo.singleresponsibility.corrected;
import java.util.*;
public class Passengers {

    public void showPassengerDetails(String name, String age, String boarding_pass_issued, String has_documents){
        System.out.println("Name: "+name);
        System.out.println("Age: "+age);
        System.out.println("Has Boardingpass: "+boarding_pass_issued);
        System.out.println("Has Valid Documents: "+has_documents);

    }
}
