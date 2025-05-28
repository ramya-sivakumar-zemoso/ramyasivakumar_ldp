package com.solidprincipledemo.dependencyinversionprinciple.corrected;

public class DatabaseFeedbackStorage implements IFeedbackStorage {
    @Override
    public void saveFeedback(String passengerName, String feedback) {
        System.out.println("Saving feedback to database for " + passengerName + ": " + feedback);
    }
}
