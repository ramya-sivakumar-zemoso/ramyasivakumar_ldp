package com.assignments.assignment3;
import java.io.*;
import java.util.*;

public class PingMedian {
    public static double pingMedian(String host) throws IOException {
        ProcessBuilder builder = new ProcessBuilder("ping", "-n", "5", host);
        Process process = builder.start();
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        List<Double> times = new ArrayList<>();
        String line;

        while ((line = reader.readLine()) != null) {
            if (line.contains("time=")) {
                int start = line.indexOf("time=") + 5;
                int end = line.indexOf("ms", start);
                if (start > 4 && end > start) {
                    String timeStr = line.substring(start, end).replaceAll("[^0-9.]", "");
                    if (!timeStr.isEmpty()) {
                        times.add(Double.parseDouble(timeStr));
                    }
                }
            }
        }
        Collections.sort(times);
        int size = times.size();
        if (size == 0) return -1;
        return size % 2 == 1 ? times.get(size / 2)
                : (times.get(size / 2 - 1) + times.get(size / 2)) / 2.0;
    }

    public static void main(String[] args) throws IOException {
        String host = "google.com";
        double median = pingMedian(host);
        if (median == -1) {
            System.out.println("Ping failed or time parsing error.");
        } else {
            System.out.println("Median ping to " + host + ": " + median + " ms");
        }
    }
}
