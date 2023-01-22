import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted!: boolean;
  isAuthenticated: boolean = false;


  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    //validation

    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return
    }
    this.http.post('https://demo9928037.mockable.io/login', this.loginForm.value)
    .subscribe((response) => {
      console.log(response);
      this.authService.login();
      this.router.navigate(['/dashboard']);

    }, (error) => {
        // Gérer les erreurs
        console.log(error);

      });
   }

}
