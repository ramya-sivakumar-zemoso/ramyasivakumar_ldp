package com.assignments.assignment7.task4;

public class Main {

        public static void useCycle(CycleFactory factory) {
            Cycle cycle = factory.getCycle();
            cycle.ride();
        }
        public static void main(String[] args) {
            useCycle(new UnicycleFactory());
            useCycle(new BicycleFactory());
            useCycle(new TricycleFactory());
        }
    }

