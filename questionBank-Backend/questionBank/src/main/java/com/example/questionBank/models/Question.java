package com.example.questionBank.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "questions", createIndex = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    private int id;
    private String quest;
    private String ans;
    private String type;
}
