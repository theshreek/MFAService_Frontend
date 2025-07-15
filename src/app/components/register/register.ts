import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RegisterService} from '../../services/register-service';
import {RegisterResponse} from '../../models/registerResponse';
import {CommonModule} from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  user: any = {
    username: '',
    email: '',
    password: '',
  }
  imageBase: string | null = null;

  constructor(
    private registerService: RegisterService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  registerResponse: RegisterResponse | null = null;

  passwordConfirm: String = "";
  isImage = false;

  registerUser() {
    this.registerService.registerUser(this.user).subscribe({
      next: (value) => {
        this.registerResponse = value;
        this.imageBase = value.imageBase64;
        if (this.imageBase) {
          this.isImage = true;
        }
        this.cdr.detectChanges();

      },
      error: (error) => {
        console.error('Failed to load image:', error);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
