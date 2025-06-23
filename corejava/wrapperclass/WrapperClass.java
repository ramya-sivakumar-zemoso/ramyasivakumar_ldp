package com.corejava.wrapperclass;

public class WrapperClass {

        public static void main(String[] args) {
            int primitiveAge = 30;
            Integer wrapperAge = primitiveAge;
            System.out.println("\n1. Autoboxing:");
            System.out.println("  Primitive int (age): " + primitiveAge);
            System.out.println("  Wrapper Integer (wrapperAge): " + wrapperAge);
            System.out.println("  Type of wrapperAge: " + wrapperAge.getClass().getName());

            Double wrapperPrice = 19.99;
            double primitivePrice = wrapperPrice;
            System.out.println("\n2. Unboxing:");
            System.out.println("  Wrapper Double (wrapperPrice): " + wrapperPrice);
            System.out.println("  Primitive double (primitivePrice): " + primitivePrice);

            String stringNumber = "4567";
            int parsedNumber = Integer.parseInt(stringNumber);
            System.out.println("\n4. Utility Method (Integer.parseInt()):");
            System.out.println("  String input: \"" + stringNumber + "\"");
            System.out.println("  Parsed int: " + parsedNumber);
            System.out.println("  Adding 10 to parsed number: " + (parsedNumber + 10));
        }
    }
