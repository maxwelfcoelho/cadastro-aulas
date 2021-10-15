import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password: FormControl = new FormControl('', [
    Validators.required
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  error: any;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.loginForm.valueChanges.subscribe(val => {
      this.error = '';
    })
  }

  onSubmit(): void {
    const email: string = this.loginForm.get('email')?.value;
    const password: string = this.loginForm.get('password')?.value;
    this.authService.login({email, password})
      .subscribe(
        (response: any) =>  {
          this.loginForm.reset();
          const url = window.location.origin;
          window.location.href = 'http://localhost:4200/lessons';
        },
        (error) => {
          console.error(error.error.message);
          this.error = error.error.message;
        }
      );
  }
}
