package com.corejava.arrays;
import java.util.Arrays;
import java.util.Scanner;
public class Namelist {
    public static void main(String[] args){
        String[] names= new String[5];
        int [][] two_d_array= new int[3][3];
        int[] numbers={50,27,17,13,20};


        int i=0;
        int j=0;
        Scanner scanner = new Scanner(System.in);
        for(i=0;i<5;i++){
            names[i]= scanner.next();
        }
        System.out.println("The list of names are:");
        for(String name:names){
            System.out.print(name+" ");
        }
        System.out.println();
        System.out.println("Sorted Array");
        Arrays.sort(numbers);
        for(int number:numbers){
            System.out.print(number+" ");
        }


        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                two_d_array[i][j]= scanner.nextInt();

            }
        }

        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                System.out.print(two_d_array[i][j]);

            }
            System.out.println();
        }


    }
}
