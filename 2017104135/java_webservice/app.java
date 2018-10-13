package com.service;

import javax.xml.ws.Endpoint;
import com.service.impl.HelloWorldImpl;

public class App {
    public static void main(String[] args) {
        String address = "http://192.168.2.79:8080/HelloWorld";
        Endpoint.publish(address, new HelloWorldImpl());
        System.out.println("发布消息成功");
    }
}