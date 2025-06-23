package com.corejava.datastructures;
import java.util.*;

public class PriorityQueue {
    public static void main(String[]args){
      Queue<String> queue = new java.util.PriorityQueue<>();
      queue.add("Sivahari");
      queue.add("Ramya");
      System.out.println( queue.peek());
      System.out.println(queue.element());
      System.out.println(queue.remove());
      System.out.println(queue.poll());
    }
}
