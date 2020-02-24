package com.example.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;

// ===================================================
@Getter
@AllArgsConstructor
public class Response {

    private String error;
    private Object data;
}