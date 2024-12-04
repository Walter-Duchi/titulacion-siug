import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notificacion-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificacion-detalle.component.html',
  styleUrls: ['./notificacion-detalle.component.css']
})
export class NotificacionDetalleComponent implements OnInit {
  notificacion: any;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.notificacion = JSON.parse(params['data']);
    });
  }

  volver(): void {
    this.location.back();
  }
}
