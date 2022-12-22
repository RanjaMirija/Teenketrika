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
      if(user){
        this.currentUserSubject.next(user)
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user')!);
      }else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!)
      }
    }),console.error();
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  signupUser(email: string, password: string): Promise<any>  {
    return new Promise((resolve, reject) =>{
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((res)=>{
        res.user?.sendEmailVerification();
        resolve
      })
      .catch(reject)
    })
  }

  signinUser(email: string, password: string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email,password)
      .then((user)=>{
        resolve(user)
      }).catch(reject)
    })
  }

  signoutUser(): Promise<void>{
    return new Promise((resolve, reject)=> {
      this.afAuth.signOut()
      .then(()=>{
        this.currentUserSubject.next(null);
        resolve();
      })
      .catch(reject)
    })
  }

  sendPasswordResetEmail(email: string): Promise<void> {
    return new Promise((resolve,reject)=>{
      this.afAuth.sendPasswordResetEmail(email)
      .then(()=>{
        resolve()
      }).catch(reject)
    })
  }

}
