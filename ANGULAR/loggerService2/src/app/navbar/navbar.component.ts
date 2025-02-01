import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  countRegistro = 0;
  countIncidencia = 0;
  countAlerta = 0;

  constructor(private registroService: RegistroService, private router: Router) {}

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe(registros => {
      this.countRegistro = registros.filter(r => r.categoria === 'registro').length;
      this.countIncidencia = registros.filter(r => r.categoria === 'incidencia').length;
      this.countAlerta = registros.filter(r => r.categoria === 'alerta').length;
    });
  }

  navigateToListado(categoria: string): void {
    this.router.navigate(['/listado'], { queryParams: { categoria } });
  }
}
