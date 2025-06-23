package com.solidprincipledemo.openclosedprinciple.corrected;

public interface FlightNotification {
    void EmailNotification(String email);
    void SMSNotification(String mobilenumber);
}
