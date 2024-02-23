import { Component } from '@angular/core';
import { AddQuestionComponent } from './../add-question/add-question.component';
import { EditQuestionComponent } from './../edit-question/edit-question.component';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-questions-container',
  standalone: true,
  imports: [AddQuestionComponent, EditQuestionComponent],
  templateUrl: './questions-container.component.html',
  styleUrl: './questions-container.component.css'
})
export class QuestionsContainerComponent {

  questions!: Question[];

  constructor(private questionService: QuestionService, private router: Router){}

  ngOnInit(): void{
    this.getQuestions();
    //console.log(this.questions)
  }

  private getQuestions(){
    let data: any;
    data = this.questionService.getQuestions();
    data.subscribe(
      (dat: any) => {
        if (dat && dat.content && Array.isArray(dat.content)){
          this.questions = dat.content;
        }
      }
    )
  }

  createQuestion(){
    this.router.navigate(['create-question'])
  }

  updateQuestion(id: number){
    this.router.navigate(['update-question', id])
  }

  deleteQuestion(id: number){
    this.questionService.deleteQuestion(id).subscribe(data => {
    console.log(data);
    this.getQuestions();
    
    })
  }

}
