import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    userName: null,
    age: null,
    role: null,
    email: null,
    password: null
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  Roles: any = ['Admin', 'Author', 'Reader'];

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { userName, age, role, email, password } = this.form;

    this.authService.register(userName, age, role, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    }
      
    );
  }

}
