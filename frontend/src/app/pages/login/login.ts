import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
 imports: [CommonModule, FormsModule,RouterModule,ReactiveFormsModule ,HttpClientModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  username='';
  password='';
  constructor(private http:HttpClient,private router:Router){}

  login(){
    this.http.post<any>('http://localhost:5000/api/users/login',{
      username: this.username,
      password:this.password
    }).subscribe({
      next:(res)=>{
        alert('Registered User. Redirecting...');
        this.router.navigate(['/dashboard']);
      },
      error: (err)=>{
        if(err.status===401){
          alert('User not registered');
        }
        else{
          alert('Something went wrong');
        }
      }
    });
  }

}
