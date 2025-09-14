FROM openjdk:26-jdk-oracle AS builder

WORKDIR /app

COPY .mvn .mvn
COPY mvnw* .
COPY pom.xml .
COPY src src

RUN ./mvnw clean install -DskipTests


FROM openjdk:26-jdk-oracle

WORKDIR /app

COPY --from=builder /app/target/backend-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

CMD ["java", "-jar", "/app/backend-0.0.1-SNAPSHOT.jar"]