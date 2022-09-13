import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private userService: UserService,
    private firestore: AngularFirestore
    ) { }

  sendMessage(message: string,idUser: number) {
    const idSender = this.userService.getIdUser();
    const idMessage = idUser +idSender;
    new Promise<void>((resolve, reject) => {
      this.firestore.collection('message').doc(idMessage.toString()).set({
        idSender,idMessage,message,
     }).then(
        ()=>{resolve();}
       ,(error: any)=>{reject(error);
      });
      },
    );
  }
}
