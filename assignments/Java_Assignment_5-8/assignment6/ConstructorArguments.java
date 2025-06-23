package com.assignments.assignment6;

public class ConstructorArguments {
        String message;
        int value;
        public ConstructorArguments(String msg) {
            this(msg, 0);
            System.out.println("First constructor called: " + msg);
        }
        public ConstructorArguments(String msg, int val) {
            this.message = msg;
            this.value = val;
            System.out.println("Second constructor called: " + msg + ", " + val);
        }

        public static void main(String[] args) {
            System.out.println("Creating object using first constructor:");
            ConstructorArguments obj1 = new ConstructorArguments("Hello World");
            System.out.println("Object message: " + obj1.message + ", value: " + obj1.value);
            System.out.println("Creating object using second constructor directly:");
            ConstructorArguments obj2 = new ConstructorArguments("Direct Call", 100);
            System.out.println("Object message: " + obj2.message + ", value: " + obj2.value);
        }
    }
