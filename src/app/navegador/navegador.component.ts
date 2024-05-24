import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navegador',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.css'
})
export class NavegadorComponent { 


  constructor(private userService: UserService, private router: Router){
    
  }

  onClick(): boolean{
    if (confirm('Está Seguro que desea Salir del Sistema?')) {
      // Si el usuario hace clic en "Aceptar", navegar a la ruta '/baja'
    this.userService.logout()
    this.router.navigate(['/ingreso'])
    return true;
  } else {
    alert('no ha salido del sistema')// Si el usuario hace clic en "Cancelar", no hacer nada
    return false;
}
  }

  
    


}
