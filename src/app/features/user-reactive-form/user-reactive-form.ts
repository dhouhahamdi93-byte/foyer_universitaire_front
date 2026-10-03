import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-reactive-form.html',
  styleUrl: './user-reactive-form.css',
})
export class UserReactiveForm {
  userReactiveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    if (this.userReactiveForm.valid) {
      console.log(this.userReactiveForm.value);
    }
  }
}