package com.assignments.assignment7.task2;

public class Cycle {
    public static void main(String[] args) {
        Cycle[] cycles = {
                new Unicycle(),
                new Bicycle(),
                new Tricycle()
        };
        if (cycles[0] instanceof Unicycle) {
            ((Unicycle) cycles[0]).balance();
        }

        if (cycles[1] instanceof Bicycle) {
            ((Bicycle) cycles[1]).balance();
        }

        if (cycles[2] instanceof Tricycle) {

            System.out.println("Tricycle does not have a balance method.");
        }
    }
}
