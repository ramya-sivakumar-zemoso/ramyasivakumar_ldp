package com.corejava.threads;

class MyRunnable implements Runnable {
    private String threadName;
    public MyRunnable(String name) {
        this.threadName = name;
        System.out.println("Creating " +  threadName );
    }

    @Override
    public void run() {
        System.out.println("Running " +  threadName );
        try {
            for(int i = 4; i > 0; i--) {
                System.out.println("Runnable Thread: " + threadName + ", " + i);
                Thread.sleep(700);
            }
        } catch (InterruptedException e) {
            System.out.println("Runnable Thread " +  threadName + " interrupted.");
        }
        System.out.println("Runnable Thread " +  threadName + " exiting.");
    }
}

public class ThreadImplementation {
    public static void main(String args[]) {
        System.out.println("Main thread started.");
        MyRunnable runnable1 = new MyRunnable("Runnable-1");
        MyRunnable runnable2 = new MyRunnable("Runnable-2");
        Thread thread1 = new Thread(runnable1);
        Thread thread2 = new Thread(runnable2);
        thread1.start();
        thread2.start();
        System.out.println("Main thread finished creating child threads.");
    }
}

