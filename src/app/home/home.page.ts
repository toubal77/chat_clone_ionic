import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  listStory = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.listStory = this.homeService.getListStory();
    console.log(this.listStory);
  }


}

