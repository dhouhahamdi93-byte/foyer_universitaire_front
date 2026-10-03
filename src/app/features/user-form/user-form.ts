import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

  // 🔹 inject service
  private userService = inject(UserService);

  // 🔹 model
  user = {
    name: '',
    email: ''
  };

  // 🔹 messages
  successMessage = '';
  errorMessage = '';

  // 🔹 submit
  onSubmit(form: NgForm) {

    // reset messages
    this.successMessage = '';
    this.errorMessage = '';

    if (form.valid) {

      this.userService.addUser(this.user).subscribe({

        next: (res) => {
          console.log('User ajouté ✅', res);

          this.successMessage = 'Utilisateur ajouté avec succès 🎉';

          form.reset(); // reset form
        },

        error: (err) => {
          console.error('Erreur ❌', err);

          this.errorMessage = 'Erreur lors de l’ajout ❌';
        }

      });

    } else {
      this.errorMessage = 'Veuillez remplir correctement le formulaire ⚠️';
    }
  }
}