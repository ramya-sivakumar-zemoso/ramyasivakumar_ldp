package com.assignments.assignment6;

class MessagePrinter {
        public MessagePrinter(String message) {
            System.out.println("Constructor called with message: " + message);
        }
}

public class ConstructorStringArgs {
    public static void main(String[] args) {
        MessagePrinter[] printers = new MessagePrinter[5];
        System.out.println("Array of MessagePrinter references created.");
    }
}

