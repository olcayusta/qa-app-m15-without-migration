import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@environments/environment';
import { Question } from '@models/question.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private http = inject(HttpClient);

  getMyQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${API_URL}/me/list`);
  }
}
