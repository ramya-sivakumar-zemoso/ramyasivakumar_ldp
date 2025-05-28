package com.solidprincipledemo.dependencyinversionprinciple.violated;

public class Main {
    public static void main(String[] args) {
        FeedbackProcessor processor = new FeedbackProcessor();
        processor.processFeedback("Passenger1", "The check-in process was smooth!");
    }
}

