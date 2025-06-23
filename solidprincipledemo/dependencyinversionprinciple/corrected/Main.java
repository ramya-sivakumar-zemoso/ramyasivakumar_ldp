package com.solidprincipledemo.dependencyinversionprinciple.corrected;

public class Main {
    public static void main(String[] args) {

        IFeedbackStorage dbStorage = new DatabaseFeedbackStorage();
        FeedbackProcessor dbProcessor = new FeedbackProcessor(dbStorage);
        dbProcessor.processFeedback("Passenger1", "Great food and timely boarding!");
        System.out.println();
        IFeedbackStorage fileStorage = new FileFeedbackStorage();
        FeedbackProcessor fileProcessor = new FeedbackProcessor(fileStorage);
        fileProcessor.processFeedback("Passenger2", "Comfortable seats and smooth landing!");
        System.out.println();
        IFeedbackStorage cloudStorage = new CloudFeedbackStorage();
        FeedbackProcessor cloudProcessor = new FeedbackProcessor(cloudStorage);
        cloudProcessor.processFeedback("Passenger3", "Helpful staff and good in-flight entertainment!");
    }
}