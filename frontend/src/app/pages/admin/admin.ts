import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

}

