import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseURL = "http://localhost:8080/questions"

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(`${this.baseURL}`);
  }

  createQuestion(question: Question): Observable<Object>{
    return this.http.post(`${this.baseURL}`, question);
  }

  getQuestionsByType(type: string): Observable<Question[]>{
    return this.http.get<Question[]>(`${this.baseURL}/${type}`);
  }

  updateQuestion(id: number, employee: Question): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, employee);
  }

  deleteQuestion(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
