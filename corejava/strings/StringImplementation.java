package com.corejava.strings;

public class StringImplementation {
    public static void main(String[] args){
        char[] string= {'h','a','p','p','y','m','o','r','n','i','n','g'};
        String s="holidays";
        String text= new String("Zemoso");
        StringBuilder stringBuilder=new StringBuilder("Today");
        stringBuilder.append(" is Monday");
        StringBuffer stringBuffer = new StringBuffer("Tomorrow");
        stringBuffer.append(" is Tuesday");
        String resultString = new String(string,0,5);
        System.out.println(string);
        System.out.println(s);
        System.out.println(text);
        System.out.println(stringBuilder);
        System.out.println(stringBuffer);
        System.out.println(resultString);
    }
}
