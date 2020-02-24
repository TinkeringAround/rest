package com.example.rest;

import java.util.UUID;
import java.util.Map;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

// ===================================================
@RestController
@RequestMapping("servers")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class ServerController {

    @Autowired
    private ServerRepository repository;

    // ===================================================
    // GET
    @GetMapping()
    public @ResponseBody Object getAllServer() {
        // !! Poor Performance on higher Server Count
        List<Server> servers = repository.findAll();
        for (Server server : servers)
            server.updateStatus();

        repository.saveAll(servers);
        return servers;
    }

    @GetMapping("/{id}")
    public @ResponseBody Object getServer(@PathVariable UUID id) {
        Server fetchedServer = repository.findById(id);

        if (fetchedServer != null)
            return ResponseEntity.status(HttpStatus.OK).body(new Response(null, fetchedServer));
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new Response(String.format("No Server found for ID %s", id), null));
    }

    // POST
    @PostMapping()
    public @ResponseBody Object addServer(@RequestBody Map<String, Object> body) {
        try {
            Server newServer = new Server(UUID.randomUUID(), (String) body.get("url"));
            if (!repository.existsByUrl(newServer.getUrl())) {
                newServer.updateStatus();
                repository.save(newServer);
                return ResponseEntity.status(HttpStatus.CREATED).body(new Response(null, newServer));
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                        new Response(String.format("Server with Url %s already exists.", newServer.getUrl()), null));
            }
        } catch (Exception e) {
            log.error(e.toString());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new Response(e.toString(), null));
        }
    }

    // DELETE
    @DeleteMapping("/{id}")
    public @ResponseBody Object deleteServer(@PathVariable UUID id) {
        Server fetchedServer = repository.findById(id);

        if (fetchedServer != null) {
            repository.delete(fetchedServer);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new Response(String.format("No Server found for ID %s", id), null));
        }
    }
}