import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { Question } from '@models/question.model';

export const questionTitleResolveFn: ResolveFn<string> = (route) => {
  const { question } = route.parent?.data as { question: Question };
  return of(question.title);
};
