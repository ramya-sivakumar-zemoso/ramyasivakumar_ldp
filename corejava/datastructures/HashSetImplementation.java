package com.corejava.datastructures;
import java.util.*;

public class HashSetImplementation {
    public static void main(String[] args){
        HashSet<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(2);
        System.out.println("Set will remove duplicate items if added.");
        for(int value:set){
            System.out.print(value + " ");
        }
        set.remove(3);
        System.out.println("");

       Iterator itr= set.iterator();
       while(itr.hasNext()){
           System.out.print(itr.next()+" ");
       }
    }
}
