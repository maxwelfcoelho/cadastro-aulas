import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { CreatelessonComponent } from './components/createlesson/createlesson.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'lessons', component: LessonComponent },
  { path: 'create-lesson', component: CreatelessonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
