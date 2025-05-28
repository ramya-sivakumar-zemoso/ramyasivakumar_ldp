package com.corejava.loops.whileloop;
import java.util.*;
import java.lang.Math;


public class PrimeNumbers {
    public static void main(String[] args){
        int number;
        double squareroot;
        int i=3;
        Scanner sc=new Scanner(System.in);
        number=sc.nextInt();
        squareroot =Math.ceil(Math.sqrt(number));
        if(number%2==0){
            System.out.println("Not a prime Number");
            return;
        }
        while(i<=squareroot){
            if(number%i==0){
                System.out.println("Not a prime Number");
                return;
            }
            i+=2;
        }
        System.out.println("It is a prime number");
    }
}
