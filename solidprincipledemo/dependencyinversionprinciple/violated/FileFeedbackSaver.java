package com.solidprincipledemo.dependencyinversionprinciple.violated;

public class FileFeedbackSaver {
    public void save(String passengerName, String feedback) {
        System.out.println("Saving feedback to FILE for " + passengerName + ": " + feedback);
    }
}

