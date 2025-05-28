package com.solidprincipledemo.interfaceseggregationprinciple.violated;

public class Main {
    public static void main(String[] args){
        CheckInInfo checkInInfo=new CheckInInfo();
        InformationDesk informationDesk=new InformationDesk();
        informationDesk.checkInInfo();
        informationDesk.flightInfo();
        informationDesk.lostLuggageInfo();
        checkInInfo.checkInInfo();
        checkInInfo.flightInfo();
        checkInInfo.lostLuggageInfo();

    }
}
