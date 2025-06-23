package com.assignments.assignment7.task3;

public class InterfaceTest {
    static void takeA(InterfaceA a) {
        a.methodA1();
        a.methodA2();
    }
    static void takeB(InterfaceB b) {
        b.methodB1();
        b.methodB2();
    }
    static void takeC(InterfaceC c) {
        c.methodC1();
        c.methodC2();
    }
    static void takeD(InterfaceD d) {
        d.methodD();
    }
    public static void main(String[] args) {
        InterfaceImplementation interfaceImplementation = new InterfaceImplementation();
        interfaceImplementation.baseClassMethod();
        takeA(interfaceImplementation);
        takeB(interfaceImplementation);
        takeC(interfaceImplementation);
        takeD(interfaceImplementation);
    }
}

