package com.example.questionBank.data;

import com.example.questionBank.models.Question;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface QuestionBank extends ElasticsearchRepository<Question, Integer> {
    List<Question> findByType(String type);
}
