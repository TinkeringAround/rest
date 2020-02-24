package com.example.rest;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// ===================================================
@SpringBootApplication
public class RestApplication implements ApplicationRunner {

    @Autowired
    private ServerRepository repository;

    // ===================================================
    public static void main(String[] args) {
        SpringApplication.run(RestApplication.class, args);
    }

    @Override
    public void run(ApplicationArguments arg0) throws Exception {
        // Clear Database -> Only for Presentation Purpose
        repository.deleteAll();

        // Seeding Database -> Only for Presentation Purpose
        repository.save(new Server(UUID.randomUUID(), "www.tinkeringaround.de"));
        repository.save(new Server(UUID.randomUUID(), "www.wuyou.de"));
    }
}