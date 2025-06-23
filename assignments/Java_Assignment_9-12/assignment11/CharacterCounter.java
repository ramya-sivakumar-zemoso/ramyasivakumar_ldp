package com.assignments.assignment11;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CharacterCounter {

    public static Map<Character, Integer> countCharacters(String filename) throws IOException {
        Map<Character, Integer> charCounts = new HashMap<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            int charCode;
            while ((charCode = reader.read()) != -1) {
                char character = (char) charCode;
                charCounts.put(character, charCounts.getOrDefault(character, 0) + 1);
            }
        }
        return charCounts;
    }

    public static void saveCharacterCounts(Map<Character, Integer> charCounts, String outputFilename) throws IOException {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFilename))) {
            for (Map.Entry<Character, Integer> entry : charCounts.entrySet()) {
                writer.write(entry.getKey() + ": " + entry.getValue());
                writer.newLine();
            }
        }
    }

    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("Usage: java CharacterCounter <input_file_name>");
            return;
        }

        String inputFileName = args[0];
        String outputFileName = inputFileName + "_counts.txt";

        System.out.println("Processing: " + inputFileName);

        try {
            Map<Character, Integer> counts = countCharacters(inputFileName);
            saveCharacterCounts(counts, outputFileName);
            System.out.println("Saved to: " + outputFileName);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
