package com.solidprincipledemo.liskovprinciple.violated;

public class MobileBoardingPass extends BoardingPass {
    @Override
    public void scan() {
        super.scan();
    }

    @Override
    public void seal() {
        throw new RuntimeException("MobileBoarding Passes cannot be sealed.");
    }
}
