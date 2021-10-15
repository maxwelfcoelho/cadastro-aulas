import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LessonComponent } from './components/lesson/lesson.component';
import { CreatelessonComponent } from './components/createlesson/createlesson.component';
import { LessondetailsComponent } from './components/lessondetails/lessondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonComponent,
    CreatelessonComponent,
    LessondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
