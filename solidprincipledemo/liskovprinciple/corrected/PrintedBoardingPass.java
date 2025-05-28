package com.solidprincipledemo.liskovprinciple.corrected;

public class PrintedBoardingPass extends BoardingGateScanner implements IBoardingPass{
    @Override
    public void scan() {
        super.scan();
    }

    @Override
    public void seal() {
        System.out.println("After verification the boarding pass was sealed.");
    }
}
