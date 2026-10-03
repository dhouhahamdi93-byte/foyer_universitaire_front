import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from "@angular/common";
import { UserForm } from "./features/user-form/user-form";
import { UserReactiveForm } from "./features/user-reactive-form/user-reactive-form";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    UserForm,
    UserReactiveForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('foyer-universitaire-front');
  footerUrl = 'http://www.cni.tn/index.php';
  footerLink = 'CNI';
}