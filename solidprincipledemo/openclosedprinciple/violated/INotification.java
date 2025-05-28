package com.solidprincipledemo.openclosedprinciple.violated;

public interface INotification {
    void EmailNotification(String email);
    void SMSNotification(String mobilenumber);
    void whatsappNotification(String mobilenumber);
}
