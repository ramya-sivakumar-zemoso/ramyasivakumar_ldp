package com.corejava.strings;

public class StringMethods {
    public static void main(String[] args){
        String name = "Ramya";
        String role = "Intern";
        int value=10;
         String text="Reminder";
        String uppercase_name="RAMYA";
        String sentence =" is an Intern";
        System.out.println(name.equals(uppercase_name));
        System.out.println(name.equalsIgnoreCase(uppercase_name));
        System.out.println(name.concat(sentence));
        System.out.println(name.compareTo(role));
        System.out.println(sentence.startsWith("a"));
        System.out.println(sentence.endsWith("n"));
        System.out.println(text.charAt(5));
        System.out.println(text.length());
        String numeric_string = String.valueOf(value);
        System.out.println(numeric_string+numeric_string);



    }
}
