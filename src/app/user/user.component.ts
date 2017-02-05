import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()" >Go home</button>
      <hr>
      {{id}}<br>
      <a [routerLink]="['detail']">Detail</a>
      <a [routerLink]="['edit']">Edit</a>
      <hr>
      <router-outlet></router-outlet>
    `
})
export class UserComponent implements OnDestroy{
  private id: string;
  private subscription: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }
  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'analitycs': 100}});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
