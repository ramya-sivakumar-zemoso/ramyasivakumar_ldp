package com.corejava.regularexpression;
import java.util.*;
import java.util.regex.Pattern;

public class RegularExpression {
    public static void main(String[] args){
        System.out.println(Pattern.matches("[am]","1234"));
        System.out.println(Pattern.matches("[a-zA-Z]","aZqWu"));
        System.out.println(Pattern.matches("[am]","1234"));
        System.out.println(Pattern.matches("[am]","1234"));


    }

}
