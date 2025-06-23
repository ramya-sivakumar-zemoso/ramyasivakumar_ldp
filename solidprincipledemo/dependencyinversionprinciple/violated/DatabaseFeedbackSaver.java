package com.solidprincipledemo.dependencyinversionprinciple.violated;
public class DatabaseFeedbackSaver {
    public void save(String passengerName, String feedback) {
        System.out.println("Saving feedback to DATABASE for " + passengerName + ": " + feedback);
    }
}
