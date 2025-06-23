package com.assignments.assignment7.task5;

public class DeviceComponentDemo {
        public static void main(String[] args) {
            Device basicDevice = new Device();
            AdvancedDevice smartDevice = new AdvancedDevice();
            AdvancedDevice.AdvancedComponent advancedPart = smartDevice.new AdvancedComponent(basicDevice, "Smart Sensor");
        }
}