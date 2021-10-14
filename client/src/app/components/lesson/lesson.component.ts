import { Component, OnInit } from '@angular/core';
import { ILesson } from 'src/app/interfaces/ILesson';
import { LessonsService } from 'src/app/services/lessons.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lessons: ILesson[] = [];

  constructor(
    private lessonsService: LessonsService
  ) { }

  ngOnInit(): void {
    this.fetchLessons();
  }

  fetchLessons(): void {
    this.lessonsService.fetchLessons().subscribe(
      (response) => this.lessons = response
    )
  }

}
