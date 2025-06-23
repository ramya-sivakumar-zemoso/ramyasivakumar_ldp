package com.solidimplementation.dependencyinversion;

public class LightBulb implements Switchable{
    @Override
    public void turnOff() {
        System.out.println("The light bulb is turned off.");
    }
    @Override
    public void turnOn() {
        System.out.println("The light bulb is turned on.");
    }
}
