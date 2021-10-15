import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { CreatelessonComponent } from './components/createlesson/createlesson.component';
import { LessondetailsComponent } from './components/lessondetails/lessondetails.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'lessons', component: LessonComponent },
  { path: 'create-lesson', component: CreatelessonComponent},
  { path: 'lesson-detail/:id', component: LessondetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
