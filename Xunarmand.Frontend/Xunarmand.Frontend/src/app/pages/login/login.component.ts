import {Component, inject, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {AuthService} from "../../../services/auth.service";
import {jwtDecode} from "jwt-decode";
import {FooterComponent} from "../../companents/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,
    RouterLink,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule, FooterComponent, RouterOutlet,],
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


  login() {
    this.authservice.login(this.form.value).subscribe({
      next: (response) => {

        const token = response.token; // Serverdan kelgan tokenni oling
        console.log(token);
        localStorage.setItem('token', token); // Tokenni localStorage'ga saqlang
        this.router.navigate(['/menu']);
      }
    });
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


}
