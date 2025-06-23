package com.solidprincipledemo.dependencyinversionprinciple.violated;

public class FeedbackProcessor {
    private DatabaseFeedbackSaver saver = new DatabaseFeedbackSaver();
    public void processFeedback(String passengerName, String feedback) {
        saver.save(passengerName, feedback);
    }
}