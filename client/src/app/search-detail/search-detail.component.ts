import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/video.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [VideoService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  private req: any;
  query: string;
  videoList: [VideoItem]

  constructor(private route: ActivatedRoute, private _video: VideoService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params);
      this.query = params['q'];
      this.req = this._video.search(this.query).subscribe(data => {
        this.videoList = data as [VideoItem];
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

}
