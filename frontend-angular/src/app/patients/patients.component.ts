import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  imports: [CommonModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {
  pacientes = [
    { nome: 'Maria', idade: '22', status:'Vencido' },
    { nome: 'Jose', idade: '23', status:'Em dia' },
    // Adicione mais objetos de medicamentos conforme necessário
  ];
}
