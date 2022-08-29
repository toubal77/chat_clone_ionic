import { Component, OnInit} from '@angular/core';
import { HomeChatService } from '../home-chat.service';
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {
listStory = [];
  constructor(private homeChatService: HomeChatService) { }

  ngOnInit() {
    this.listStory = this.homeChatService.getListStory();
    console.log(this.listStory);
  }

}
