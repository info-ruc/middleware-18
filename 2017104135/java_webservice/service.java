package com.service.impl;

import javax.jws.WebService;

//@WebService用于标识该类为WebService类
@WebService
public class HelloWorldImpl {
    public String sayHello(String text) {
        return "Hello : " + text;
    }
}