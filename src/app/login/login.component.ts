import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  cedula: string = '0951415778';
  password: string = '1234567';
  rol: string = 'Gestor';  // Valor por defecto del rol

  // Método onSubmit
  onSubmit() {
    console.log('Cédula:', this.cedula);
    console.log('Contraseña:', this.password);
    console.log('Rol:', this.rol);
    alert('Inicio de sesión exitoso');
  }
}