import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {
  listStory = [];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.listStory = this.homeService.getListStory();
  }

}
