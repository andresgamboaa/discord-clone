import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { StorageService } from '../../services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['/counter']);
    }
  }

  onSubmit() {
    const { email, password } = this.form.value;
    console.log(email);
    console.log(password);
    this.authService.login(email!, password!).subscribe({
      next: data => {
        this.storageService.saveToken(data.token);
        this.router.navigate(['/servers']);
      }
    })
  }
}
