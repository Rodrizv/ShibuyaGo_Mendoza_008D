import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  vehiculo ={
    id:0,
    marca:"",
    modelo:"",
    tipoVehiculo:""
  }

  constructor(private apiCrud: ApiCrudService,
              private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getVehiculoById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getVehiculoById(vehiculoID:number){
    this.apiCrud.BuscarVehiculoId(vehiculoID).subscribe(
      (resp:any)=>{
        this.vehiculo={
          id: resp[0].id,
          marca: resp[0].marca,
          modelo: resp[0].modelo,
          tipoVehiculo: resp[0].tipoVehiculo
        }
      }
    )
  }

}
