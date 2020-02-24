package com.example.rest;

import java.util.UUID;
import java.net.URL;
import java.net.HttpURLConnection;
import java.time.Instant;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

// ===================================================
@Getter
@Slf4j
public class Server {

    @Id
    private final UUID id;

    @Indexed(unique = true)
    private final String url;

    private boolean status = false;

    private long lastUpdated;

    // ===================================================
    public Server(UUID id, String url) {
        this.id = id;
        this.url = url;
    }

    // Update Status Method
    public void updateStatus() {
        try {
            log.info(String.format("Updating Status for %s", this.url));
            HttpURLConnection httpUrlConnection = (HttpURLConnection) new URL(String.format("https://%s", this.url))
                    .openConnection();
            httpUrlConnection.setRequestMethod("GET");

            this.status = ((httpUrlConnection.getResponseCode()) == HttpURLConnection.HTTP_OK);
        } catch (Exception exception) {
            log.error(exception.toString());
            this.status = false;
        }

        // Update Timestamp
        this.lastUpdated = Instant.now().toEpochMilli();
    }
}