package com.solidprincipledemo.dependencyinversionprinciple.corrected;

public class FeedbackProcessor {
    private final IFeedbackStorage feedbackStorage;

    public FeedbackProcessor(IFeedbackStorage feedbackStorage) {
        this.feedbackStorage = feedbackStorage;
    }

    public void processFeedback(String passengerName, String feedback) {
        feedbackStorage.saveFeedback(passengerName, feedback);
    }

}
