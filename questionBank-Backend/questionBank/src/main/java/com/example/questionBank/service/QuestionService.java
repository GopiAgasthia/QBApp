package com.example.questionBank.service;

import com.example.questionBank.data.QuestionBank;
import com.example.questionBank.models.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionBank questionBank;

    public ResponseEntity<Iterable<Question>> getAllQuestions() {
        if (questionBank.count()!=0) {
            try {
                return new ResponseEntity<>(questionBank.findAll(), HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        //return "in Service getAllQns";
    }

    public ResponseEntity<List<Question>> getQuestionsByType(String type) {

        try {
            return new ResponseEntity<>(questionBank.findByType(type), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<String> addQuestion(Question fromQuestion) {
        try {
            questionBank.save(fromQuestion);
            return new ResponseEntity<>(null, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    public ResponseEntity<String> updateQuestion(int id, Question fromQuestion) {
        if (questionBank.existsById(id)) {
            try {
                questionBank.save(fromQuestion);
                return new ResponseEntity<>(null, HttpStatus.CREATED);
            } catch (Exception e) {
                return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
            }
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<String> deleteQuestion(int id) {
        if (questionBank.existsById(id)) {
            try {
                questionBank.deleteById(id);
                return new ResponseEntity<>(null, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
            }
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
