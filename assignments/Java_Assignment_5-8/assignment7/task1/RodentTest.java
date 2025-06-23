package com.assignments.assignment7.task1;

public class RodentTest {
    public static void main(String[] args) {
        Rodent[] rodents = {
                new Mouse(),
                new Gerbil(),
                new Hamster()
        };

        System.out.println("Behavior of each Rodent");
        for (Rodent r : rodents) {
            r.eat();
            r.run();
            r.sleep();
            System.out.println();
        }
    }
}


