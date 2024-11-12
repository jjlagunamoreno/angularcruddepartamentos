import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';


@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrl: './homecomponent.component.css'
})
export class HomecomponentComponent implements OnInit {
  public departamentos!: Array<Departamento>;
  constructor(private _service: ServiceDepartamentos) { }
  deleteDepartamento(id: number): void {
    this._service.deleteDepartamento(id.toString()).subscribe(Response => {
      this.loadDepartamentos();
    })
  }
  loadDepartamentos() {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    })
  }
  ngOnInit(): void {
    this.loadDepartamentos();
  }
}
