package com.assignments.assignment6;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class VampireNumber {
        public static void main(String[] args) {
            List<Long> vampireNumbersFound = new ArrayList<>();
            long num = 10;
            int count = 0;
            int numDigits = 4;

            while (count < 100) {
                String numStr = Long.toString(num);
                if (numStr.length() % 2 != 0) {
                    numDigits = numStr.length() + 1;
                    num = (long) Math.pow(10, numDigits -1);
                    continue;
                }
                if (isVampire(num, numStr)) {
                    vampireNumbersFound.add(num);
                    System.out.println((count + 1) + ": " + num);
                    count++;
                }
                num++;
            }
        }
        private static boolean isVampire(long currentNum, String numStr) {
            int n = numStr.length();
            if (n % 2 != 0) {
                return false;
            }
            char[] numChars = numStr.toCharArray();
            Arrays.sort(numChars);
            for (long fang1 = (long) Math.pow(10, n / 2 - 1); fang1 < (long) Math.pow(10, n / 2); fang1++) {
                if (currentNum % fang1 == 0) {
                    long fang2 = currentNum / fang1;
                    String fang1Str = Long.toString(fang1);
                    String fang2Str = Long.toString(fang2);
                    if (fang1Str.length() != n / 2 || fang2Str.length() != n / 2) {
                        continue;
                    }
                    if (fang1Str.endsWith("0") && fang2Str.endsWith("0")) {
                        continue;
                    }
                    String combinedFangsStr = fang1Str + fang2Str;
                    char[] combinedFangsChars = combinedFangsStr.toCharArray();
                    Arrays.sort(combinedFangsChars);
                    if (Arrays.equals(numChars, combinedFangsChars)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
