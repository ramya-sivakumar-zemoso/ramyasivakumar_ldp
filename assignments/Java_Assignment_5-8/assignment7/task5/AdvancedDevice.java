package com.assignments.assignment7.task5;
class AdvancedDevice {
    class AdvancedComponent extends Device.Component {
        public AdvancedComponent(Device device, String componentName) {
            device.super(componentName);
            System.out.println("AdvancedDevice.AdvancedComponent initialized");
        }
    }
}
