package com.example.rest;

import java.util.UUID;
import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

@DisplayName("Server Test")
class ServerTest {

    @Test
    @DisplayName("Status remains false by Invalid URL")
    void checkStatusOfInvalidURL() {
        Server server = new Server(UUID.randomUUID(), "www.notexistent.de");
        assertEquals(false, server.isStatus());

        // Update Status
        server.updateStatus();
        assertEquals(false, server.isStatus(), "Server Status remains false");
    }

    @Test
    @DisplayName("Status becomes true by Valid URL")
    void checkStatusOfValidURL() {
        Server server = new Server(UUID.randomUUID(), "www.google.de");
        server.updateStatus();
        assertEquals(true, server.isStatus(), "Server Status became true");
    }

    @Test
    @DisplayName("Updating timestamp on updating Status")
    void testUpdateTimestamp() {
        Server server = new Server(UUID.randomUUID(), "www.google.de");
        server.updateStatus();
        long before = server.getLastUpdated();

        try {
            TimeUnit.SECONDS.sleep(5);

            server.updateStatus();
            long after = server.getLastUpdated();

            assertEquals(true, (after - before) > 0, "Timestamp was updated");
        } catch (Exception e) {
            System.out.println(e.toString());
            fail();
        }
    }
}
