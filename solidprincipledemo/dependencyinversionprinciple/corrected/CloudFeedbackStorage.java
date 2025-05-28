package com.solidprincipledemo.dependencyinversionprinciple.corrected;

public class CloudFeedbackStorage implements IFeedbackStorage {
    @Override
    public void saveFeedback(String passengerName, String feedback) {
        System.out.println("Saving feedback to cloud for " + passengerName + ": " + feedback);
    }
}
