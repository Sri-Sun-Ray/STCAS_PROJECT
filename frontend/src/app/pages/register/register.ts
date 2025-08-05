import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {

}
