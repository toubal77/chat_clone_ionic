import { Component, OnInit } from '@angular/core';
import { HomeChatService } from './home-chat.service';

@Component({
  selector: 'app-home-chat',
  templateUrl: './home-chat.page.html',
  styleUrls: ['./home-chat.page.scss'],
})
export class HomeChatPage implements OnInit {
  listStory = [];
  constructor(private homeChatService: HomeChatService) { }

  ngOnInit() {
    this.listStory = this.homeChatService.getListStory();
    console.log(this.listStory);
  }


}
