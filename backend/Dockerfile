
FROM openjdk:17-jdk-slim


WORKDIR /app


COPY build.gradle .
COPY settings.gradle . 


COPY gradlew .
COPY gradle gradle/


RUN chmod +x gradlew


COPY src ./src


RUN ./gradlew bootJar --no-daemon --info


CMD ["java", "-jar", "build/libs/resident-service-0.0.1-SNAPSHOT.jar"]
