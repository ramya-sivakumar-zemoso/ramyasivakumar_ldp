package com.solidprincipledemo.liskovprinciple.corrected;

public class Main {
    public static void main(String[] args){
       MobileBoardingPass mobileBoardingPass=new MobileBoardingPass();
       mobileBoardingPass.scan();
       PrintedBoardingPass printedBoardingPass=new PrintedBoardingPass();
       printedBoardingPass.scan();
       printedBoardingPass.seal();
    }
}
