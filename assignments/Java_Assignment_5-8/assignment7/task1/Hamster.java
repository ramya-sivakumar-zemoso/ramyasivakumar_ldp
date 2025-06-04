package com.assignments.assignment7.task1;


class Hamster extends Rodent {
    Hamster() {
        System.out.println("Hamster created");
    }
    @Override
    void eat() {
        System.out.println("Hamster eats vegetables");
    }
    @Override
    void run() {
        System.out.println("Hamster runs inside a ball");
    }
    @Override
    void sleep() {
        System.out.println("Hamster sleeps in soft bedding");
    }
}
