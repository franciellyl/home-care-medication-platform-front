import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pacientes = [
    { nome: 'João', status: 'dispensado', dataDispensacao: new Date('2024-11-25') },
    { nome: 'Maria', status: 'atrasado', dataDispensacao: new Date('2024-11-24') },
    { nome: 'José', status: 'em breve', dataDispensacao: new Date('2024-11-26') },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStatusClass(paciente: any): string {
    const today = new Date();
    const dataDispensacao = new Date(paciente.dataDispensacao);
    const diffTime = dataDispensacao.getTime() - today.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);

    if (diffDays < 0) {
      return 'red'; // Atrasado
    } else if (diffDays <= 2) {
      return 'yellow'; // Em breve
    } else {
      return 'green'; // Dispensado no prazo
    }
  }
  
}
