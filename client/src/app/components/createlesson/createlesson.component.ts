import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LessonsService } from 'src/app/services/lessons.service';

@Component({
  selector: 'app-createlesson',
  templateUrl: './createlesson.component.html',
  styleUrls: ['./createlesson.component.css']
})
export class CreatelessonComponent implements OnInit {

  title = new FormControl('',[Validators.required]);
  description = new FormControl('', [Validators.required]);

  form = new FormGroup({
    title: this.title,
    description: this.description
  });

  constructor(
    private location: Location,
    private lessonService: LessonsService
  ) { }

  ngOnInit(): void {
  }

  createLesson(): void {
    const title: string = this.form.get('title')?.value;
    const description: string = this.form.get('description')?.value;

    this.lessonService.createLesson({title, description}).subscribe(response => console.log(response));
    window.location.href = 'http://localhost:4200/lessons';
  }

  cancel(event: any): void {
    event.preventDefault();


    this.location.back();
  }
}
