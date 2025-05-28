package com.solidimplementation.interfaceseggregation;

public class Worker implements Workable , Eatable , Sleepable {
    @Override
    public void work() {
        System.out.println("The worker works for 8 hrs a day.");
    }

    @Override
    public void eat() {
        System.out.println("They are provided with lunch at the office everyday.");
    }

    @Override
    public void sleep() {
        System.out.println("They were advised to maintain proper sleep cycle in order to be productive.");
    }
    public static void main (String[] args){
        Worker worker = new Worker();
        worker.work();
        worker.eat();
        worker.sleep();
    }
}
