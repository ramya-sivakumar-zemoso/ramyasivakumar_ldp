package com.solidprincipledemo.dependencyinversionprinciple.corrected;

public class FileFeedbackStorage implements IFeedbackStorage {
    @Override
    public void saveFeedback(String passengerName, String feedback) {
        System.out.println("Saving feedback to file for " + passengerName + ": " + feedback);
    }
}

