package com.corejava.datastructures;

import java.util.*;

public class HashMapImplementation {
    public static void main(String[] args){
        HashMap<Integer, String> students = new HashMap<>();
        students.put(1,"Ramya");
        students.put(2,"Reeta");
        students.put(3,"Sashong");
        for(Map.Entry<Integer,String> entry:students.entrySet()){
            Integer key = entry.getKey();
            String value=entry.getValue();
            System.out.println(key+":"+value);
        }
        students.remove("2");
        if(students.containsKey("2")){
            System.out.println("The student is not removed yet");
        }
        else{
            System.out.println("The student has been successfully removed.");
        }

    }
}
