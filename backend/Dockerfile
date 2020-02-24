# Stage 1 - Build Static Files
FROM maven:3-jdk-13 as BUILD
WORKDIR /app
COPY . .
EXPOSE 27017
RUN mvn clean install -U

# Stage 2 - Build Spring Boot Server
FROM openjdk:13-jdk-alpine
VOLUME /tmp
COPY --from=BUILD /app/target/*.jar app.jar 
EXPOSE 8080
ENTRYPOINT ["java", "-jar","/app.jar"]