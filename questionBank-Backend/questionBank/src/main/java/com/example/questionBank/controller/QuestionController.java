package com.example.questionBank.controller;

import com.example.questionBank.models.Question;
import com.example.questionBank.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = "http://localhost:4200")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public ResponseEntity<Iterable<Question>> getAllQuestions(){
        return questionService.getAllQuestions();
    }

    @GetMapping("/{type}")
    public ResponseEntity<List<Question>> getQuestionsByType(@PathVariable String type){
        return questionService.getQuestionsByType(type);
    }

    @PostMapping
    public ResponseEntity<String> addQuestion(@RequestBody Question question){
        return questionService.addQuestion(question);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateQuestion(@PathVariable int id, @RequestBody Question question){
        return questionService.updateQuestion(id, question);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteQuestion(@PathVariable int id){
        return questionService.deleteQuestion(id);
    }

}
