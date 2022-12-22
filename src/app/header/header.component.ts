import { Router } from '@angular/router';
import { User } from './../interfaces/user';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUserSubscription!: Subscription;
  currentUser!: User

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.currentUserSubscription = this.authService.currentUserSubject.subscribe({
      next: ((user)=>{
        this.currentUser = <User>user
      }),
      error: console.error
    })
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  onSignout():void {
    this.authService.signoutUser()
    .then(()=>{
      this.route.navigate(['/']);
    })
    .catch(console.error)
  }

}
