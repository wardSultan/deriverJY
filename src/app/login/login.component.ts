import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      localStorage.setItem('auth', 'false');
    }, 200);
  }

  showPassword() {
    var x = document.getElementById('myInput') as HTMLInputElement;
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }
  login() {
    localStorage.setItem('auth', 'true');
    this.router.navigateByUrl('/companies');
  }
  checkAuth() {
    if (
      localStorage.getItem('auth') == null ||
      localStorage.getItem('auth') == 'false'
    ) {
      return true;
    }

    return false;
  }
}
