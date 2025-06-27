#abstraction
from abc import ABC, abstractmethod
class SmartDevice(ABC):
    @abstractmethod
    def turn_on(self):
        pass

    @abstractmethod
    def turn_off(self):
        pass

    def get_status(self):
        return "Unknown Status" 

class SmartLight(SmartDevice):
    def turn_on(self):
        print("Turn on light")

    def turn_off(self):
        print("Turn off light")

class SmartSpeaker(SmartDevice):
    def turn_on(self):
        print("Turn on speaker")

    def turn_off(self):
        print("Turn off speaker")
def operate_device(device: SmartDevice):
    print(f"\nOperating a {device.__class__.__name__}:")
    device.turn_on()
    print(f"Status: {device.get_status()}") 
    device.turn_off()

light = SmartLight()
speaker = SmartSpeaker()

operate_device(light)
operate_device(speaker)
