import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { QuestionService } from './question.service';
import { Question } from '@models/question.model';

export const questionResolveFn: ResolveFn<Question> = (route) => {
  const questionId = Number(route.paramMap.get('questionId'));
  return inject(QuestionService).getQuestion(questionId);
};
