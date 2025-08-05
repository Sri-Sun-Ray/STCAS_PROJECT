import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule,RouterModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {

}
