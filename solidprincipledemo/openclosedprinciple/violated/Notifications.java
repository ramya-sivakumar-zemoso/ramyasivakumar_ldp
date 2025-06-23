package com.solidprincipledemo.openclosedprinciple.violated;

public class Notifications implements INotification{
    @Override
    public void whatsappNotification(String mobilenumber) {
        System.out.println("Details regarding your on-boarding has been successfully sent to your whatsapp mobile number:"+ mobilenumber);

    }

    @Override
    public void EmailNotification(String email) {
        System.out.println("Details regarding your on-boarding has been successfully sent to the email: "+email);
    }

    @Override
    public void SMSNotification(String mobilenumber) {
        System.out.println("Details regarding your on-boarding has been successfully sent to the mobile: " + mobilenumber);
    }
}
