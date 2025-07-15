import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../../services/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  imports: [
    FormsModule
  ],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css'
})
export class VerifyOtp {
  otp: string[] = ['', '', '', '', '', ''];
  otpInputs = Array(6);

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  @ViewChildren('inputBox') inputBoxes!: QueryList<ElementRef>;

  onInput(event: any, index: number) {
    const input = event.target;
    const value = input.value;

    // if (value.length > 1) {
    //   debugger
    //   this.otp[index] = value.slice(-1); // keep only last digit
    // }

    if (value && index < 5) {
      const nextInput = this.inputBoxes.get(index + 1);
      nextInput?.nativeElement.focus();
    }

    if (!value && index > 0) {
      const prevInput = this.inputBoxes.get(index - 1);
      prevInput?.nativeElement.focus();
    }
  }

  verifyOtp() {
    const enteredOtp = this.otp.join('');

    this.loginService.verifyOtp(enteredOtp).subscribe({
      next: (value) => {
        if('SUCCESS' === value.status) {
          this.router.navigate(['/dashboard']);
        }else {
          this.router.navigate(['/login']);
        }
        console.log(value);
      }

    })


    // if (enteredOtp.length === 6) {
    //   console.log('Verifying OTP:', enteredOtp);
    //   // Call your verification logic here
    // } else {
    //   alert('Please enter all 6 digits.');
    // }
  }
}

