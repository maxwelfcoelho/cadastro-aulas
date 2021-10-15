import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILesson } from 'src/app/interfaces/ILesson';
import { LessonsService } from 'src/app/services/lessons.service';

@Component({
  selector: 'app-lessondetails',
  templateUrl: './lessondetails.component.html',
  styleUrls: ['./lessondetails.component.css']
})
export class LessondetailsComponent implements OnInit {

  lesson: ILesson = {title: '', description: ''};

  id: string = this.route.snapshot.paramMap.get('id') || '';

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonsService
    ) { }

  ngOnInit(): void {
    this.getLesson();
  }

  getLesson(): void {
    this.lessonService.getLesson(this.id).subscribe(response => {
      this.lesson = response[0];
    });
  }

  cancel(): void {
    window.location.href = 'http://localhost:4200/lessons';
  }

  delete(): void {
    const shouldDelete = confirm('Confirm, if you really want to delete it');
    if (shouldDelete) {
      this.lessonService.deleteLesson(this.id).subscribe(response => {
        window.location.href = 'http://localhost:4200/lessons';
      });
    }
  }

}
