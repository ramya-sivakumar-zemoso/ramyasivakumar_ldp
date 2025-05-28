package com.solidprincipledemo.openclosedprinciple.corrected;

public class WhatsappNotification extends NotificationService{
    public void whatsappNotification(String mobilenumber){
        System.out.println("Details regarding your on-boarding has been successfully sent to your whatsapp mobile number:"+ mobilenumber);
    }
}
