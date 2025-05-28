package com.solidprincipledemo.interfaceseggregationprinciple.corrected;

public class CheckInInfo implements ICheckIn {
    @Override
    public void showCheckInStatus() {
        System.out.println("The passenger is checked in successfully.");
    }
}
