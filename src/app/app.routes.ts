
import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { Signup } from './features/signup/signup';
import { NotFound } from './features/not-found/not-found';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound }
];