import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button (click)="onNavigate()" >Go Home</button>

    `
})
export class UserEditComponent {
  constructor(private router: Router){}
  
  onNavigate() {
    this.router.navigate(['/']);
  }
}
