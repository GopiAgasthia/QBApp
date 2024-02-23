import { Component, Input, Output, ViewChild } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { EventEmitter } from 'stream';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent {

  question: Question = new Question();
  constructor(private questionService: QuestionService,
    private router: Router) { }

  ngOnInit(): void {
  }
  private saveQuestion(){
    let data: any;
    data = this.questionService.createQuestion(this.question);
    data.subscribe(
      (dat: any) => {
        
      }
    )
    this.goToQuestionList();
  }

  goToQuestionList(){
    setTimeout(()=>{
      this.router.navigate(['/questions']);
    },
    1000);
  }
  
  onSubmit(){
    //console.log(this.question);
    this.saveQuestion();
  }
}
