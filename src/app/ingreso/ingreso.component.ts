import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule, 
  ],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})

export class IngresoComponent   {

  formLogin: FormGroup;
  errorMessage: string | undefined;

  constructor(private userService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log("Usuario registrado correctamente");
        this.router.navigate(['/bandeja'])
      })
      .catch(error => {
        this.errorMessage = "NO TIENE PERMISOS VERIFIQUE SUS CREDENCIALES pongase en contacto con su proovedor";
        // Aquí puedes mostrar el mensaje al usuario de la manera que prefieras, por ejemplo, mediante una alerta
        alert(this.errorMessage);
        console.error(error); // También puedes registrar el error en la consola para propósitos de depuración
      });
  }


}
