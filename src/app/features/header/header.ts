import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  // Interpolation
  property1 = "Bonjour";
  methodeA() { return 2; }

  // Property Binding
  property2: boolean = true;

  // Event Binding
  message: string = '';
  methodeB() {
    this.message = 'Vous avez implémenté le Event Binding';
  }

  // Two-Way Binding
  property3 = "Bonjour";
}