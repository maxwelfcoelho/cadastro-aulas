import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  editClicked: boolean = false;

  form = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonsService
    ) { }

  ngOnInit(): void {
    this.getLesson();

    // this.form = new FormGroup({
    //   title: new FormControl(this.lesson.title),
    //   description: new FormControl('')
    // });
  }

  ngAfterViewInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

  getLesson(): void {
    this.lessonService.getLesson(this.id).subscribe(response => {
      this.lesson = response[0];
      this.setFormInputValues({
        title: response[0].title,
        description: response[0].description
      });
    });
  }

  setFormInputValues(lesson: ILesson) {
    this.form.controls['title'].setValue(lesson.title);
    this.form.controls['description'].setValue(lesson.description);
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

  edit(): void {
    if (this.editClicked === true) this.editClicked = false;
    else this.editClicked = true;
  }

  update(): void {
    const title = this.form.get('title')?.value;
    const description = this.form.get('description')?.value;

    this.lessonService.updateLesson({id: Number(this.id), title, description})
      .subscribe(response => {
        window.location.href = 'http://localhost:4200/lessons';
      });
  }

}
