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

  createLesson(lecture: ILesson): Observable<any> {
    return this.http.post(`${this.baseUrl}/lecture`, {
      title: lecture.title,
      description: lecture.description,
    });
  }

  getLesson(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lectures/${id}`);
  }

  deleteLesson(id: string): Observable<any> {
    console.log(`${this.baseUrl}/lecture/${id}`)
    return this.http.delete(`${this.baseUrl}/lecture/${id}`);
  }
}
