package com.solidprincipledemo.interfaceseggregationprinciple.corrected;

public class Main {
    public static void main(String[] args){
        FlightInfo flightInfo=new FlightInfo();
        CheckInInfo checkInInfo=new CheckInInfo();
        LostLuggage lostLuggage=new LostLuggage();
       flightInfo.showFlightDetails();
       checkInInfo.showCheckInStatus();
       lostLuggage.complainLostLuggages();
    }
}
