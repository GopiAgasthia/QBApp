import { Component, Input, Output, ViewChild } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { EventEmitter } from 'stream';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-question.component.html',
  styleUrl: './edit-question.component.css'
})
export class EditQuestionComponent {
  question: Question = new Question;
  id: number;
  questions!: Question[];
  curQuest!: string;
  curAns!: string;
  curType!: string;

  constructor(private questionService: QuestionService,
    private questionService2: QuestionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.id = this.activatedRoute.snapshot.params["id"];
      this.question.id = this.id;
  }

  ngOnInit(): void {
    this.getQuestions();
    // console.log(this.questions)
    setTimeout(()=>{
    for (let quest of this.questions){
        if (quest.id == this.id){
          this.curQuest = quest.quest;
          this.curAns = quest.ans;
          this.curType = quest.type;
          break;
        }
      }
    }, 300);
  }



  private saveQuestion(){
    let data: any;
    this.question.ans = this.curAns;
    this.question.quest = this.curQuest;
    this.question.type = this.curType;
    data = this.questionService.updateQuestion(this.id, this.question);
    data.subscribe(
      (dat: any) => {
      }
    )
    this.goToQuestionList();
  }

  private getQuestions(){
    let data: any;
    data = this.questionService2.getQuestions();
    data.subscribe(
      (dat: any) => {
        if (dat && dat.content && Array.isArray(dat.content)){
          this.questions = dat.content;
        }
      }
    )
  }

  goToQuestionList(){
    setTimeout(()=>{
      this.router.navigate(['/questions']);
    },
    100);
  }

  onSubmit(){
    //console.log(this.question);
    setTimeout(()=>{
    this.saveQuestion();
    },
    100);
  }
}

