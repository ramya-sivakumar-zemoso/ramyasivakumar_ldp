package com.solidimplementation.opencloseprinciple;
import java.util.Scanner;
public class ExtendedClass extends OpenClosePrinciple{
    public String GenerateStatus(){
        if(total>250){
            return("Pass");
        }
        else{
            return ("Failed");
        }
    }
    public static void main(String[] args){
        int mark1;
        int mark2;
        int mark3;
        Scanner sc = new Scanner(System.in);
        mark1=sc.nextInt();
        mark2=sc.nextInt();
        mark3=sc.nextInt();
        OpenClosePrinciple openClosePrinciple = new OpenClosePrinciple();
        ExtendedClass extendedClass = new ExtendedClass();
        extendedClass.total=openClosePrinciple.calculateTotal(mark1,mark2,mark3);
        System.out.println(extendedClass.GenerateStatus());
    }
}


