package com.example.rest;

import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

// ===================================================
public interface ServerRepository extends MongoRepository<Server, String> {

    public boolean existsByUrl(String url);

    public Server findById(UUID id);
}