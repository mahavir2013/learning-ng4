import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  title = 'Vodeo List';
  someItem = '<h1>Hi There</h1>';
  todayDate; // https://angular.io/guide/pipes
  videoList = [
    {
      name: 'Item 1',
      slug: 'item-1',
      embed: 'https://www.youtube.com/embed/6wD4V0rvlDI'
    },
    {
      name: 'Item 2',
      slug: 'item-2',
      embed: 'https://www.youtube.com/embed/6wD4V0rvlDI'
    },
    {
      name: 'Item 3',
      slug: 'item-3',
      embed: null
    },
  ];

  constructor() { }

  ngOnInit() {
    this.todayDate = new Date();
  }

  getEmbedUrl(item) {
    return item.embed;
  }

}
