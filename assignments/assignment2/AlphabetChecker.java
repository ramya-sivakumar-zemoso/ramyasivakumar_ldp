package com.assignments.assignment2;
import java.util.*;

public class AlphabetChecker {
    public void checker(String word){
        HashSet<Character> alphabethashset= new HashSet<>();
        for(int i=0;i<word.length();i++){
            if((word.charAt(i)>='a') && (word.charAt(i)<='z'))
                alphabethashset.add(word.charAt(i));
        }
        if(alphabethashset.size()==26){
            System.out.println("The given word is a PANGRAM");
        }
        else{
            System.out.println("The given word is not a PANGRAM");
        }

    }
    public static void main(String[] args){
        String word;
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter a word");
        word= scanner.nextLine();
        AlphabetChecker alphabetChecker=new AlphabetChecker();
        alphabetChecker.checker(word.toLowerCase());
    }
}
