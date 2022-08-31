import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { HomeService } from 'src/app/service/home.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-all-chat',
  templateUrl: './all-chat.component.html',
  styleUrls: ['./all-chat.component.scss'],
})
export class AllChatComponent implements OnInit ,OnDestroy {
  users = [];
  userSubscriptions: Subscription;
  listStory = [];
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private homeService: HomeService) { }

  ngOnDestroy(): void {
    this.userSubscriptions.unsubscribe();
  }

  ngOnInit() {
    this.listStory = this.homeService.getListStory();
    this.getAllUsers();
  }

  onSingOut(){
    this.authService.signOutUser();
  }

  getAllUsers(){
  this.userService.getAllUsers();
  this.userService.userSubjects.subscribe(users => {
    this.users = users;
  });
  this.userService.emitUsers();
}

}
