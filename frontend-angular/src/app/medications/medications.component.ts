import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medications',
  imports: [CommonModule],
  templateUrl: './medications.component.html',
  styleUrl: './medications.component.scss'
})
export class MedicationsComponent {
  medicamentos = [
    { nome: 'Paracetamol', dose: '500mg' },
    { nome: 'Ibuprofeno', dose: '200mg' },
    // Adicione mais objetos de medicamentos conforme necessário
  ];
}
