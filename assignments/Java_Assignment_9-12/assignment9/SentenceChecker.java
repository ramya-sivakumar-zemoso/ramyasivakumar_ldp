package com.assignments.assignment9;
import java.util.*;
import java.util.regex.Pattern;


public class SentenceChecker {
    public void checkSentence(String sentence){
        System.out.println(Pattern.matches("^[A-Z].*\\.$",sentence));
    }
    public static void main(String[] args){
        String sentence;
        Scanner scanner=new Scanner(System.in);
        sentence=scanner.nextLine();
        SentenceChecker sentenceChecker=new SentenceChecker();
        sentenceChecker.checkSentence(sentence);
    }
}
