package com.assignments.assignment7.task1;

class Gerbil extends Rodent {
    Gerbil() {
        System.out.println("Gerbil created");
    }
    @Override
    void eat() {
        System.out.println("Gerbil eats grains");
    }
    @Override
    void run() {
        System.out.println("Gerbil runs quickly");
    }
    @Override
    void sleep() {
        System.out.println("Gerbil sleeps in burrows");
    }
}
