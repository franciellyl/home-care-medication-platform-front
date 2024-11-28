import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-rotas',
  imports: [CommonModule],
  templateUrl: './rotas.component.html',
  styleUrl: './rotas.component.scss'
})
export class RotasComponent {
  rotas = [
    { pacienteNome: 'Maria', descricao: 'Rota 1' },
    { pacienteNome: 'Jose', descricao: 'Rota 2' },
    // Adicione mais objetos de medicamentos conforme necessário
  ];
}
