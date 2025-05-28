package com.solidprincipledemo.liskovprinciple.violated;

public class Main {
    public static void main(String[] args){
      BoardingPass mobileBoardingPass= new MobileBoardingPass();
      BoardingPass printedBoardingPass=new PrintedBoardingPass();
        printedBoardingPass.scan();
        printedBoardingPass.seal();
      mobileBoardingPass.scan();
      mobileBoardingPass.seal();


    }
}
