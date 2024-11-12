import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'; // IMPORTAMOS LOS ELEMENTOS NECESARIOS
import { Departamento } from '../../models/departamento'; // IMPORTAMOS EL MODELO DEPARTAMENTO
import { ServiceDepartamentos } from '../../services/service.departamentos'; // IMPORTAMOS EL SERVICIO DEPARTAMENTOS
import { ActivatedRoute, Params } from '@angular/router'; // IMPORTAMOS LO NECESARIO PARA OBTENER PARÁMETROS DE RUTAS
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit', // SELECTOR PARA EL COMPONENTE
  templateUrl: './edit.component.html', // ENLACE A LA VISTA DEL COMPONENTE
  styleUrls: ['./edit.component.css'] // ENLACE A LOS ESTILOS CSS DEL COMPONENTE (SE CORRIGE styleUrl -> styleUrls)
})
export class EditComponent implements OnInit {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  public departamento!: Departamento; // VARIABLE QUE REPRESENTA EL DEPARTAMENTO A EDITAR

  // CONSTRUCTOR PARA INYECTAR LOS SERVICIOS NECESARIOS
  constructor(
    private _service: ServiceDepartamentos, // INYECTAMOS EL SERVICIO DEPARTAMENTOS
    private _activeRoute: ActivatedRoute, // INYECTAMOS `ActivatedRoute` PARA OBTENER LOS PARÁMETROS DE RUTA
    private _router: Router
  ) { }

  updateDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nom = this.cajaNombre.nativeElement.value;
    let loc = this.cajaLocalidad.nativeElement.value;

    let editDepartamento = new Departamento(id, nom, loc);
    this._service.updateDepartamento(editDepartamento).subscribe(response => {
      this._router.navigate(["/"]);
    })
  }

  // MÉTODO QUE SE EJECUTA CUANDO SE INICIA EL COMPONENTE
  ngOnInit(): void {
    // NOS SUSCRIBIMOS A LOS PARÁMETROS DE LA RUTA
    this._activeRoute.params.subscribe((params: Params) => {
      let id = params['id']; // RECUPERAMOS EL ID DESDE LOS PARÁMETROS
      // BUSCAMOS EL DEPARTAMENTO POR ID USANDO EL SERVICIO
      this._service.findDepartamento(id).subscribe(response => {
        this.departamento = response; // ASIGNAMOS EL RESULTADO A LA VARIABLE `departamento`
      });
    });
  }
}
