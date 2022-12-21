import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSubject = new BehaviorSubject<User | null>(null)

  constructor(
    private afAuth : AngularFireAuth
  ){
    this.afAuth.onAuthStateChanged(user =>{
      this.currentUserSubject.next(user)
    }),console.error();
  }

  signinUser(email: string, password: string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email,password)
      .then((user)=>{
        resolve(user)
      }).catch(reject)
    })
  }

}
