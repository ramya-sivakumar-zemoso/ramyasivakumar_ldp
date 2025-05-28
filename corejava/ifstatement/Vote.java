package com.corejava.ifstatement;
import java.util.*;
public class Vote {
    public void eligibility(int age){
        if(age>=18){
            System.out.println("You are eligible to vote.");
        }
        else{
            System.out.println("You are not eligible to vote.");
        }
    }
    public static void main(String[] args){
        int age;
        System.out.println("Enter your age:");
        Scanner sc= new Scanner(System.in);
        age=sc.nextInt();
        Vote vote=new Vote();
        vote.eligibility(age);
    }
}
