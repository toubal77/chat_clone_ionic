import { Component, OnInit } from '@angular/core';
import { HomeChatService } from '../home-chat.service';

@Component({
  selector: 'app-detail-chat',
  templateUrl: './detail-chat.component.html',
  styleUrls: ['./detail-chat.component.scss'],
})
export class DetailChatComponent implements OnInit {

  listStory = [];
  constructor(private homeChatService: HomeChatService) { }

  ngOnInit() {
    this.listStory = this.homeChatService.getListStory();
    console.log(this.listStory);
  }


}
