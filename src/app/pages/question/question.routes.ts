import { Routes } from '@angular/router';
import { QuestionComponent } from './question.component';
import { questionResolveFn } from './question.resolver';
import { questionTitleResolveFn } from './resolvers/question-title.resolver';

export default [
  {
    path: '',
    resolve: {
      question: questionResolveFn
    },
    children: [
      {
        path: '',
        component: QuestionComponent,
        title: questionTitleResolveFn
      }
    ]
  }
] as Routes;
