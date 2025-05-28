package com.corejava.datastructures;
import java.util.*;


public class StackList {
    public static void main(String[] args){
        Stack <Integer> stack= new Stack<>();
        Scanner scanner=new Scanner(System.in);
        for(int i=0;i<5;i++){
            int value=scanner.nextInt();
            stack.push(value);
        }
        System.out.println("Elements in the stack are:");
        for(int num :stack){
            System.out.print(num+" ");
        }
        System.out.println();
        stack.pop();
        System.out.println("Stack after performing POP operation:");
        Iterator itr= stack.iterator();

       while(itr.hasNext()){
           System.out.print(itr.next()+" ");
       }
    }
}
