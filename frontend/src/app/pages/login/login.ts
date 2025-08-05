import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule,RouterModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

}
