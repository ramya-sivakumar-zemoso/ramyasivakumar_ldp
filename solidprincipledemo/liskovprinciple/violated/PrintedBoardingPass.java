package com.solidprincipledemo.liskovprinciple.violated;

public class PrintedBoardingPass extends BoardingPass {
    @Override
    public void scan() {
        super.scan();
    }

    @Override
    public void seal() {
        super.seal();
    }
}
