import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  constructor(
    private loginService: AutentificacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = sessionStorage.getItem('nombre');
    this.id = sessionStorage.getItem('usuario');
    this.apellido = sessionStorage.getItem('apellido');
    this.correo = sessionStorage.getItem('correo');
  }
  user: string = null;
  id: string = null;
  apellido: string = null;
  correo: string = null;

  enroutar() {
    this.router.navigate(['cambiar-password']);
  }
}

