import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-all-chat',
  templateUrl: './all-chat.component.html',
  styleUrls: ['./all-chat.component.scss'],
})
export class AllChatComponent implements OnInit {

  listStory = [];
  constructor(
    private authService: AuthService,
    private homeService: HomeService) { }

  ngOnInit() {
    this.listStory = this.homeService.getListStory();
    console.log(this.listStory);
  }

  onSingOut(){
    this.authService.signOutUser();
  }
}
