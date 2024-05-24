import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfiliadoService } from '../services/afiliado.service';
import { RouterModule } from '@angular/router';
import { NavegadorComponent } from "../navegador/navegador.component";

@Component({
    selector: 'app-nuevo-afiliado',
    standalone: true,
    templateUrl: './nuevo-afiliado.component.html',
    styleUrl: './nuevo-afiliado.component.css',
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        NavegadorComponent
    ]
})
export class NuevoAfiliadoComponent {

formulario: FormGroup;


constructor(private afiliadoService: AfiliadoService) {
  this.formulario = new FormGroup({
    cuit_titular: new FormControl(),
    nombre_apellido: new FormControl(),
    fecha_nacimiento: new FormControl(),
    domicilio: new FormControl(),
    calle: new FormControl(),
    numero: new FormControl(),
    provincia: new FormControl(),
    localidad: new FormControl(),
    codigo_postal: new FormControl(),
    nacionalidad: new FormControl(),
    parentesco: new FormControl(),
    detalle_parentesco: new FormControl(),
    razon_social: new FormControl(),
    empresa: new FormControl(),
    cuit_empresa: new FormControl(),
    tipo_afiliado: new FormControl(),
    numero_tramite_opc_cambio: new FormControl(),
    fecha_alta_formulario: new FormControl(),
    telefono: new FormControl(),
    sexo: new FormControl(),
    estado_civil: new FormControl(),
    tipo_discapacidad: new FormControl(),
    fecha_vencimiento_certificado: new FormControl(),
    email: new FormControl(),
    r_nos: new FormControl(),
    movimiento: new FormControl(),
    observaciones: new FormControl(),
    img_dni1: new FormControl(),
    img_dni2: new FormControl(),
    pdf_formulario: new FormControl(),
    notas: new FormControl()
  });
  
}

ngOnInit(): void {} 

//se da cuando se rellena el formulario
async onSubmit(){
console.log(this.formulario.value); //ya tiene los valores es un objeto
const respuesta = await this.afiliadoService.addAfiliado(this.formulario.value); //guardamos la respuesta
console.log(respuesta); 
alert("se ha guardado correctamente") //alerta
this.formulario.reset(); // pone en blanco el formilario

}




}
