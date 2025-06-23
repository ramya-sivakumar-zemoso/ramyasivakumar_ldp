package com.solidprincipledemo.interfaceseggregationprinciple.corrected;

public class LostLuggage implements Ilostluggage {
    @Override
    public void complainLostLuggages() {
        System.out.println("Passengers can use the lost lugagges helpdesk to complain about their missing baggages");
    }
}
