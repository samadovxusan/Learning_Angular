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
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule,
    RouterLink,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.html'
})
export class RegisterComponent implements  OnInit{
  authservice = inject(AuthService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  hide = true;
  form !: FormGroup;
  fb = inject(FormBuilder);

  decodeToken : any | null;
  token  = 'token'
  roles : string = '';
  true : boolean = true;

  response : boolean = false;



  register() {
    this.authservice.register(this.form.value).subscribe({
      next: (response) => {
        console.log(response);
        console.log(response.success); // Log the full response to inspect it
        if (response.success) {  // Fix this.true to true
          console.log('Success', response);
          this.router.navigate(['/login']);
        }
      }
    });
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


}
