package com.NamingConvention;
public class NamingConvention {
    public static void appendOperation( StringBuilder value){
        value.append("Sivakumar");
        System.out.println("After Appending the value:"+value);
    }
    public static void main(String[] args){

        StringBuilder initialValue = new StringBuilder("Ramya ");
        System.out.println("Initial Value:"+ initialValue);
        appendOperation(initialValue);
    }
}
