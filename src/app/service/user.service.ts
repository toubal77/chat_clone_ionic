import { Injectable } from '@angular/core';
import 'firebase/firestore';
import 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';

import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
userSubjects = new Subject<User[]>();
  constructor(private firestore: AngularFirestore) { }

  emitUsers(){
    this.userSubjects.next(this.users);
  }

   getAllUsers(){
   this.firestore.collection<User>('users').get().subscribe((querySnap) => {
   console.log(querySnap);
    querySnap.docs.forEach(user => {
      this.users.push(user.data());
    });
   });
  this.emitUsers();
}

getIdUser(){
return firebase.auth().currentUser.uid;
}
}

