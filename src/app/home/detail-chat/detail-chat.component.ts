import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-detail-chat',
  templateUrl: './detail-chat.component.html',
  styleUrls: ['./detail-chat.component.scss'],
})
export class DetailChatComponent implements OnInit {
  id: number;
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params =>{
    this.id = params.detail;
      console.log(this.id);

    });

  }

  onSubmit(){
    const inputEl = document.getElementById('input-text')as HTMLInputElement | null;
const message= inputEl?.value;
console.log(message);
console.log(inputEl);

this.messageService.sendMessage(message,this.id);
  }
}

