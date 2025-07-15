import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from '../../services/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  userLoginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  userLogin() {
    this.loginService.userLogin(this.userLoginForm.get('username')?.value!, this.userLoginForm.get('password')?.value!).subscribe({
      next: (value) => {
        sessionStorage.setItem('username', value.username)
        sessionStorage.setItem('accessToken', value.accessToken)

        this.router.navigate(['/authenticate']);
      },
      error: (error) => {
        console.error('Failed to load image:', error);
      }

    });
  }
}
