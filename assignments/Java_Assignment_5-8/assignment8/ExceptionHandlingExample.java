package com.assignments.assignment8;

public class ExceptionHandlingExample {
    static class FileReadException extends Exception {
        public FileReadException(String message) {
            super(message);
        }
    }
    static class NetworkConnectionException extends Exception {
        public NetworkConnectionException(String message) {
            super(message);
        }
    }
    static class InvalidInputException extends Exception {
        public InvalidInputException(String message) {
            super(message);
        }
    }
    static class DataProcessor {
        public void processData(int scenario) throws FileReadException, NetworkConnectionException, InvalidInputException {
            System.out.println("Attempting to process data for scenario: " + scenario);
            if (scenario == 1) {
                throw new FileReadException("Error: Could not read configuration file.");
            } else if (scenario == 2) {
                throw new NetworkConnectionException("Error: Failed to connect to the server.");
            } else if (scenario == 3) {
                throw new InvalidInputException("Error: User provided invalid input data.");
            } else if (scenario == 4) {
                String data = null;
                System.out.println("Attempting to get length of null string: " + data.length()); // This will throw NullPointerException
            } else {
                System.out.println("Data processing completed successfully (no custom exception thrown).");
            }
        }
    }

    public static void main(String[] args) {
        DataProcessor processor = new DataProcessor();
        int[] scenariosToTest = {1, 2, 3, 4, 0}; // 0 for no exception
        for (int i = 0; i < scenariosToTest.length; i++) {
            int currentScenario = scenariosToTest[i];
            System.out.println("Running Scenario " + (i + 1) + ": " + currentScenario);
            try {
                processor.processData(currentScenario);
            } catch (Exception e) {
                System.err.println("Caught an exception: " + e.getClass().getSimpleName());
                System.err.println("Message: " + e.getMessage());
            } finally {
                System.out.println("Finally block executed for scenario " + currentScenario + ".");
            }
        }
    }
}