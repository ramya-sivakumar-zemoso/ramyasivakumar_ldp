package com.solidprincipledemo.singleresponsibility.corrected;

public class CheckinService {
    public void checkInStatus(String boarding_pass_issued, String has_documents){
        if((boarding_pass_issued.equals("yes"))&&( has_documents.equals("yes"))){
            System.out.println("The passenger can Check-In");
        }
        else{
            System.out.println("The passenger does not have the required documents and cannot Check-In");
        }

    }
}
