import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { MedicationsComponent } from './medications/medications.component';
import { AboutComponent } from './about/about.component';
import { RotasComponent } from './rotas/rotas.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'medications', component: MedicationsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'rotas', component: RotasComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes),
      CommonModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
