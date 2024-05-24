import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AfiliadoService } from '../services/afiliado.service';
import { NavegadorComponent } from "../navegador/navegador.component";


@Component({
    selector: 'app-detalle-afiliado',
    standalone: true,
    templateUrl: './detalle-afiliado.component.html',
    styleUrl: './detalle-afiliado.component.css',
    imports: [
        RouterLink,
       NavegadorComponent
    ]
})
export class DetalleAfiliadoComponent {

afiliado: any = {};
  id: any;

constructor(private readonly activatedRoute: ActivatedRoute, private afiliadosService: AfiliadoService){
  }

ngOnInit(): void {
this.activatedRoute.params.subscribe(params => {this.id = params['id']});
this.afiliadosService.getAfiliadoPorId(this.id).subscribe((afiliado) => {this.afiliado = afiliado});
}

}
