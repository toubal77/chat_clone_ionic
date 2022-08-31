import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { HomeService } from 'src/app/service/home.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit, OnDestroy {
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


  getAllUsers(){
  this.userService.getAllUsers();
  this.userService.userSubjects.subscribe(users => {
    this.users = users;
  });
  this.userService.emitUsers();
}
}
