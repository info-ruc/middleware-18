package com.service.impl;

import javax.jws.WebService;

//@WebService���ڱ�ʶ����ΪWebService��
@WebService
public class HelloWorldImpl {
    public String sayHello(String text) {
        return "Hello : " + text;
    }
}