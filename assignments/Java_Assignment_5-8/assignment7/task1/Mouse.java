package com.assignments.assignment7.task1;

class Mouse extends Rodent {
    Mouse() {
        System.out.println("Mouse created");
    }

    @Override
    void eat() {
        System.out.println("Mouse eats cheese");
    }

    @Override
    void run() {
        System.out.println("Mouse runs in the wheel");
    }

    @Override
    void sleep() {
        System.out.println("Mouse sleeps in a hole");
    }
}
