package com.solidprincipledemo.interfaceseggregationprinciple.violated;

public class InformationDesk implements Information {
    @Override
    public void checkInInfo() {
        System.out.println("Provides information about check-in status");

    }

    @Override
    public void lostLuggageInfo() {
        System.out.println("Passengers can use the lost lugagges helpdesk to complain about their missing baggages");

    }

    @Override
    public void flightInfo() {
        System.out.println("The details about the passenger flight can be viewed to track the flight status");

    }
}
