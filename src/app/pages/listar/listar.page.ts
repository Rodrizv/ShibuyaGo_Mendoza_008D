import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IVehiculos } from '../interfaces/interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  vehiculos:IVehiculos[]=[];

  constructor(private vehiculoService: ApiCrudService,
              private loadingCtrl: LoadingController) { }
  
  ionViewWillEnter(){
    this.loadVehiculos();
  }

  async loadVehiculos(event?: InfiniteScrollCustomEvent){

    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();

    this.vehiculoService.listarVehiculos().subscribe(
      {
        next: resp=>{
          console.log(resp);
          loading.dismiss();
          let listString = JSON.stringify(resp);
          this.vehiculos = JSON.parse(listString);
          event?.target.complete();
          console.log(this.vehiculos);
        },
        error: err=>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }

}
