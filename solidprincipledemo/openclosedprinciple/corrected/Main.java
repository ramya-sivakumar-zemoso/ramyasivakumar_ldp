package com.solidprincipledemo.openclosedprinciple.corrected;

import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        String email;
        String mobilenumber;
        System.out.println("Enter your contact details for communication:");
        Scanner sc=new Scanner(System.in);
        System.out.println("Email: ");
        email= sc.next();
        System.out.println("Mobile Number: ");
        mobilenumber=sc.next();
        NotificationService notificationService=new NotificationService();
        notificationService.EmailNotification(email);
        notificationService.SMSNotification(mobilenumber);
        WhatsappNotification whatsappNotification=new WhatsappNotification();
        whatsappNotification.whatsappNotification(mobilenumber);
    }
}
