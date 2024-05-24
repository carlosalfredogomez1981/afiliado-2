import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NavegadorComponent } from "../navegador/navegador.component";

@Component({
    selector: 'app-bandeja-principal',
    standalone: true,
    templateUrl: './bandeja-principal.component.html',
    styleUrl: './bandeja-principal.component.css',
    imports: [
        NavegadorComponent
    ]
})
export class BandejaPrincipalComponent {

  constructor(private userService: UserService, private router: Router) { }

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
   

  

  mostrarAlerta(): boolean {
    if (confirm('Se dirige a BAJAS, debe estar seguro antes de eliminar un AFILIADO, esto es un proceso que no se puede revertir')) {
        // Si el usuario hace clic en "Aceptar", navegar a la ruta '/baja'
        window.location.href = '/baja';
        return true;
    } else {
        alert('Gracias')// Si el usuario hace clic en "Cancelar", no hacer nada
        return false;
    }
}
}


