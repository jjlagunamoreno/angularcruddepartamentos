// IMPORTAMOS LOS ELEMENTOS NECESARIOS DESDE ANGULAR Y OTROS MÓDULOS
// MODULO PARA RECUPERAR PARÁMETROS DE LAS RUTAS
// MODELO DEPARTAMENTO PARA TIPADO DE DATOS
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  // VARIABLE QUE REPRESENTA EL DEPARTAMENTO QUE SE MOSTRARÁ EN LA VISTA
  public departamento!: Departamento;

  // EL CONSTRUCTOR SE UTILIZA PARA INYECTAR SERVICIOS Y OBJETOS NECESARIOS
  constructor(
    private _activeRoute: ActivatedRoute // INYECTAMOS `ActivatedRoute` PARA OBTENER PARÁMETROS DE LAS RUTAS
  ) { }

  // MÉTODO QUE SE EJECUTA AL INICIAR EL COMPONENTE
  ngOnInit(): void {
    // NOS SUSCRIBIMOS A LOS CAMBIOS EN LOS PARÁMETROS DE LA RUTA
    this._activeRoute.params.subscribe((params: Params) => {
      // RECUPERAMOS LOS PARÁMETROS DE LA RUTA Y LOS ASIGNAMOS A VARIABLES
      // RECUPERAMOS EL ID COMO NÚMERO
      // RECUPERAMOS EL NOMBRE COMO TEXTO
      // RECUPERAMOS LA LOCALIDAD COMO TEXTO
      let id = parseInt(params["id"]);
      let nom = params["nombre"];
      let loc = params["localidad"];

      // CREAMOS UNA INSTANCIA DEL MODELO DEPARTAMENTO CON LOS VALORES RECUPERADOS
      this.departamento = new Departamento(id, nom, loc);
    });
  }
}
