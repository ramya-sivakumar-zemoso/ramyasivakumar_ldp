package com.solidprincipledemo.interfaceseggregationprinciple.corrected;

public class FlightInfo implements IFlight {
    @Override
    public void showFlightDetails() {
        System.out.println("The details about the passenger flight can be viewed to track the flight status");
    }
}
