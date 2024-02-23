FROM openjdk:21
LABEL MAINTAINER="QBAPP"
ADD target/questionBank-0.0.1-SNAPSHOT.jar  questionBankAppDocker.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "questionBankAppDocker.jar"]