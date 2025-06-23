package com.solidimplementation.dependencyinversion;

public class SwitchClass{
   public Switchable device;

   public SwitchClass( Switchable device) {
       this.device = device;
   }
   public void Operate(){
       device.turnOn();
       device.turnOff();

    }
}
