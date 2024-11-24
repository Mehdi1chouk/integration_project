import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(
    private fb: FormBuilder, private route: Router
  ) { }

  // gotologin() {
  //   this.route.navigate(['/login'])
  // }
  gotologin() {
    this.route.navigate(['/login']);
  }

}
