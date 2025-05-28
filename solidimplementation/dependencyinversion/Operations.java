package com.solidimplementation.dependencyinversion;
public class Operations {
    public static void main(String[] args){
        Switchable bulb = new LightBulb();
        SwitchClass bulbSwitch = new SwitchClass(bulb);
        bulbSwitch.Operate();

        Switchable fan = new Fan();
        SwitchClass fanSwitch = new SwitchClass(fan);
        fanSwitch.Operate();
    }
}
