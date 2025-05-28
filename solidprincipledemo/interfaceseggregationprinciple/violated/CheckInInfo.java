package com.solidprincipledemo.interfaceseggregationprinciple.violated;

public class CheckInInfo implements Information {
    @Override
    public void checkInInfo() {
        System.out.println("Provides information about check-in status");
    }

    @Override
    public void flightInfo() {
        throw new RuntimeException("Check-in information does not provide details about the flight.");
    }

    @Override
    public void lostLuggageInfo() {
        throw new RuntimeException("Check-in information does not provide details about the lost luggage.");

    }
}
