package com.solidprincipledemo.openclosedprinciple.corrected;
import java.util.*;

public class NotificationService implements FlightNotification{
    @Override
    public void EmailNotification(String email) {
        System.out.println("Details regarding your on-boarding has been successfully sent to the email: "+email);
    }

    @Override
    public void SMSNotification(String mobilenumber) {
        System.out.println("Details regarding your on-boarding has been successfully sent to the mobile: " + mobilenumber);
    }
}
