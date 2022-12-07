import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private loginService: LoginService,) {}

  ngOnInit(): void {}

  submitForm(): void {
    if (this.form.invalid) {
      alert(`No Data`);
    } else {
      this.loginService.login(this.form.get('email')?.value!,this.form.get('password')?.value!);
    }

    
  }
}
