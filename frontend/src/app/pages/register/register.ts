import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule,RouterModule,ReactiveFormsModule ,HttpClientModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
    form: FormGroup;

     constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      employee_name: [''],
      phone_number: [''],
      username: [''],
      password: ['']
    });

}
 onSubmit() {
    this.http.post('http://localhost:3000/api/register', this.form.value)
      .subscribe({
        next: () => alert('Registration successful'),
        error: () => alert('Registration failed')
      });
  }
}
