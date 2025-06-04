package com.assignments.assignment1;
import java.io.File;
import java.util.*;
public class FileTraversal {
    public void searchFile(File directory , String file_name){
        File[] files=directory.listFiles();
        if(files != null){
            for( File file : files){
                if(file.isDirectory()){
                    searchFile(file,file_name);
                } else if (file.getName().equalsIgnoreCase(file_name)) {
                    System.out.println("File found at: " + file.getAbsolutePath());
                }
            }
        }
    }

    public static void main(String[] args){
        String file_name;
        Scanner scanner= new Scanner(System.in);
        File directory = new File("C:\\Users\\Ramya Sivakumar\\Desktop");
        System.out.println("Enter the name of the target file:");
        file_name=scanner.next();
        FileTraversal fileTraversal=new FileTraversal();
        fileTraversal.searchFile(directory,file_name);
    }

}
