// package com.example.rest;

// import java.util.List;
// import java.util.UUID;

// import org.junit.jupiter.api.BeforeAll;
// import org.junit.jupiter.api.DisplayName;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
// import org.springframework.boot.test.mock.mockito.MockBean;
// import org.springframework.data.mongodb.core.MongoTemplate;
// import org.springframework.http.MediaType;
// import org.springframework.test.web.servlet.MockMvc;

// import static org.hamcrest.Matchers.hasSize;
// import static org.mockito.BDDMockito.given;
// import static org.hamcrest.Matchers.is;
// import static
// org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
// import static
// org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
// import static
// org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// // ===================================================
// @DisplayName("Server Controller Test")
// @DataMongoTest
// class ServerControllerTest {

// @Autowired
// private MockMvc mvc;

// @MockBean
// private ServerRepository repository;

// private Server ServerOne;
// private Server ServerTwo;

// // ===================================================
// @BeforeAll
// public void setup() {
// ServerOne = new Server(UUID.randomUUID(), "tinkeringaround.de");
// ServerTwo = new Server(UUID.randomUUID(), "wuyou.de");
// }

// // TODO: Implement Test Cases
// @Test
// @DisplayName("200 OK: /servers route")
// void testServersRoute(@Autowired MongoTemplate mongoTemplate) throws
// Exception {
// List<Server> servers = List.of(ServerOne, ServerTwo);
// given(repository.findAll()).willReturn(servers);

// mvc.perform(get("/servers").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
// .andExpect(jsonPath("$", hasSize(2))).andExpect(jsonPath("$[0].url",
// is("Hallo")));

// }
// }
