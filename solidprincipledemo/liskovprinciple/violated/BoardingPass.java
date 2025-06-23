package com.solidprincipledemo.liskovprinciple.violated;

public class BoardingPass {
    public void scan(){
        System.out.println("The boarding pass submitted by the passenger was scanned at the Boarding Gate.");
    }
    public void seal() {
        System.out.println("After verification the boarding pass was sealed.");
    }
}
