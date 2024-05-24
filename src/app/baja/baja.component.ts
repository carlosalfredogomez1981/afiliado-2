import { Component } from '@angular/core';
import { Firestore, doc, deleteDoc } from '@angular/fire/firestore';

import Afiliado from '../interfaces/afiliado.interface';
import { AfiliadoService } from '../services/afiliado.service';
import { NavegadorComponent } from "../navegador/navegador.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-baja',
    standalone: true,
    templateUrl: './baja.component.html',
    styleUrl: './baja.component.css',
    imports: [NavegadorComponent,CommonModule, RouterModule, FormsModule,]
})
export class BajaComponent {
  afiliados: Afiliado[] = [];
  errorMessage: any;
selectdId: string | null = null;

  constructor(private readonly afiliadoService: AfiliadoService, private firestore: Firestore, private router: Router) {
   

   }
  ngOnInit(): void {
    this.afiliadoService.getAfiliados().subscribe((afiliados) => {
      this.afiliados = afiliados;
    });
     }


     async deleteAfiliado(id: string) {
      if (confirm('¿Está seguro de que desea eliminar este afiliado?')) {
        const afiliadoRef = doc(this.firestore, 'afiliado', id);
        await deleteDoc(afiliadoRef).catch((error) => {
          console.error(error);
          this.errorMessage = error.message;
        }); }}

onVerClick(id: string){
  this.selectdId = id;
  console.log(this.selectdId);
  this.router.navigate(['detalle', id]);
}

}
