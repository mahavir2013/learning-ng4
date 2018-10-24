import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit, OnDestroy {
  private req;
  homeImageList: [VideoItem] = [] as [VideoItem];
  videoListDefaultImage = 'assets/images/videos/1.jpg';

  constructor(private router: Router, private _video: VideoService) { }

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
      // console.log(data);
      data.filter(item => {
        if (item.featured) {
          this.homeImageList.push(item);
        }
      });
      // this.homeImageList = data.json();
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  preventNormal(event: MouseEvent, image: any) {
    if (!image.prevented) {
      event.preventDefault();
      // image.setAttribute('href', '/videos'); // for dom element
      // image.link = '/videos'; // for json object
      image.prevented = true;
      this.router.navigate(['./videos']);
    }
  }

}
