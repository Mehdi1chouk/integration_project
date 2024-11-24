import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //authForm: FormGroup;
  constructor(
    private fb: FormBuilder, private route: Router) { }
  // ngOnInit(): void {
  //   this.authForm = this.fb.group({
  //     email: ['', [Validators.required, , Validators.email]],
  //     password: ['', Validators.required]
  //   });
  // }
  gotosign() {
    this.route.navigate(['/sign-up'])
  }


  login() { }

}
