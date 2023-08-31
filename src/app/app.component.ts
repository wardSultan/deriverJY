import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'deriverJY';
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any
  ) {}
  checkAuth() {
    if (
      localStorage.getItem('auth') == null ||
      localStorage.getItem('auth') == 'false'
    ) {
      return false;
    }

    return true;
  }
}
