import { RouterModule, Routes } from '@angular/router';
import { QuestionsContainerComponent } from './questions-container/questions-container.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'questions', component: QuestionsContainerComponent},
    {path: 'create-question', component: AddQuestionComponent},
    {path: '', redirectTo: 'questions', pathMatch: 'full'},
    {path: 'update-question/:id', component: EditQuestionComponent},
    // {path: 'questions/:type', component: QuestionsByTypeContainerComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
    exports: [RouterModule]
  })
  export class AppRoutingModule { }