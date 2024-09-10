import {Component, inject, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {AuthService} from "../../../services/auth.service";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,
    RouterLink,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements  OnInit{
  authservice = inject(AuthService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  hide = true;
  form !: FormGroup;
  fb = inject(FormBuilder);

  decodeToken : any | null;
  token  = 'token'
  roles : string = '';


  login(){
    this.authservice.login(this.form.value).subscribe(
      {
       next: (response) => {
         console.log(response);
         this.decodeToken = jwtDecode(localStorage.getItem(this.token)!);
         this.roles = this.decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
         console.log(this.roles);
         }
      }
    )
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


}
