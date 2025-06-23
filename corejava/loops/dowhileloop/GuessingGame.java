package com.corejava.loops.dowhileloop;
import java.util.*;
public class GuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int targetNumber = (int) (Math.random() * 100) + 1;
        int userGuess;
        int attempts = 1;
        System.out.println("Guess a number between 1 and 100:");
        do {
            userGuess = sc.nextInt();
            attempts++;
            if (userGuess > targetNumber) {
                System.out.println("Too high! Try again:");
            } else if (userGuess < targetNumber) {
                System.out.println("Too low! Try again:");
            } else {
                System.out.println("Congratulations! You guessed the number in " + attempts + " attempts.");
            }
        } while ((userGuess != targetNumber) && (attempts<=3));
        sc.close();
    }
}
