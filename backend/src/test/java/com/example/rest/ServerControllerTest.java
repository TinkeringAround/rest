// package com.example.rest;

// import org.junit.jupiter.api.BeforeAll;
// import org.junit.jupiter.api.DisplayName;
// import org.junit.jupiter.api.Test;
// import org.mockito.InjectMocks;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
// import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
// import org.springframework.boot.test.mock.mockito.MockBean;
// import org.springframework.data.mongodb.core.MongoTemplate;
// import org.springframework.test.web.servlet.MockMvc;
// import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
// import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
// import org.springframework.test.web.servlet.setup.MockMvcBuilders;

// // ===================================================
// @DisplayName("Server Controller Test")
// @DataMongoTest
// class ServerControllerTest {

// @Autowired
// private MockMvc mock;

// @MockBean
// private ServerRepository repository;

// @InjectMocks
// private ServerController api;

// // ===================================================
// @BeforeAll
// public void setUp(@Autowired MongoTemplate mongoTemplate) throws Exception {
// // mock = MockMvcBuilders.standaloneSetup(api).build();

// // mock.perform(MockMvcRequestBuilders.post(urlTemplate, uriVars))
// }

// @Test
// @DisplayName("200 OK: /servers route")
// void testServersRoute(@Autowired MongoTemplate mongoTemplate) throws
// Exception {
// //
// mock.perform(MockMvcRequestBuilders.get("/servers")).andExpect(MockMvcResultMatchers.status().isOk());
// }
// }
