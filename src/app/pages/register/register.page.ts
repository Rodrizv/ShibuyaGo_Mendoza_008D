import { Component, OnInit } from '@angular/core';
import { IUsers } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  newUsuario: IUsers={
    username: "",
    password: "",
    role: "usuario",
    isactive: true
  }

  constructor(private apiCrud: ApiCrudService,
              private router: Router) { }

  ngOnInit() {
  }
  crearUsuario(){
    this.apiCrud.CrearUsuario(this.newUsuario).subscribe();
    this.router.navigateByUrl("/login")
  }

}
