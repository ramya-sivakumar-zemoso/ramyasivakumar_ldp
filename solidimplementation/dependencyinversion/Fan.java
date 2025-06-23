package com.solidimplementation.dependencyinversion;

public class Fan implements Switchable{
    @Override
    public void turnOn() {
        System.out.println("The fan is turned on.");
    }

    @Override
    public void turnOff() {
        System.out.println("The fan is turned off.");
    }
}
