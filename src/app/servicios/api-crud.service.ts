import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers, IVehiculos, Users } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { IVehiculo } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  listarVehiculos():Observable<IVehiculos>{
    return this.httpclient.get<IVehiculos>(`${environment.apiUrl}/vehiculos`);
  }

  CrearUsuario(newUsuario: IUsers): Observable<IUsers>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  BuscarVehiculoId(id:number):Observable<IVehiculos>{
    return this.httpclient.get<IVehiculos>(`${environment.apiUrl}/vehiculos/?id=${id}`);
  }

  ActualizarVehiculo(vehiculo:any):Observable<IVehiculos>{
    return this.httpclient.put<IVehiculos>(`${environment.apiUrl}/vehiculos/${vehiculo.id}`, vehiculo);
  }

  EliminarVehiculo(vehiculo:any):Observable<IVehiculos>{
    return this.httpclient.delete<IVehiculos>(`${environment.apiUrl}/vehiculos/${vehiculo.id}`);
  }
}
