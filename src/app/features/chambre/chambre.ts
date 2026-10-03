import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chambre',
  imports: [FormsModule, CommonModule],
  templateUrl: './chambre.html',
  styleUrl: './chambre.css'
})
export class Chambre {
  listChambres = [
    { idChambre: 1, numeroChambre: 101, typeC: 'SIMPLE' },
    { idChambre: 2, numeroChambre: 102, typeC: 'DOUBLE' },
    { idChambre: 3, numeroChambre: 103, typeC: 'TRIPLE' }
  ];
}