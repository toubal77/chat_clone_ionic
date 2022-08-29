import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  listStory = [
    {
      id:1,
    img:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    label: 'Person '
  },
  {
    id:2,
    img:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    label: 'Person '
  },
  {
    id:3,
    img:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    label: 'Person '
  },
  {
    id:4,
    img:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    label: 'Person '
  },
  {
    id:5,
    img:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    label: 'Person '
  },
  {
    id:6,
    img:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    label: 'Person '
  },
  {
    id:7,
    img:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    label:'Person '
  },
  {
    id:8,
    img:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    label:'Person '
  },
  ];
  constructor() { }

  getListStory() {
    return this.listStory;
  }
}
