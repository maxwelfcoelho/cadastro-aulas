import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILesson } from '../interfaces/ILesson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  readonly baseUrl: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  fetchLessons(): Observable<ILesson[]> {
    return this.http.get<ILesson[]>(`${this.baseUrl}/lectures`);
  }
}
