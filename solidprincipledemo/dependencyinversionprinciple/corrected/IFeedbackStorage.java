package com.solidprincipledemo.dependencyinversionprinciple.corrected;

public interface IFeedbackStorage {
    void saveFeedback(String passengerName, String feedback);
}
