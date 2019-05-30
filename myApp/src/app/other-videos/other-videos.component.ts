import { Component, OnInit, NgZone } from '@angular/core';
import { UriExchangeService } from '../uri-exchange.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-other-videos',
  templateUrl: './other-videos.component.html',
  styleUrls: ['./other-videos.component.css']
})
export class OtherVideosComponent implements OnInit {

// stores the attributes of the video

  tiles = [
    {
      link: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
      src: '../../assets/img/parkour.jpg',
      title: 'Parkour',
      description: 'Parkour tricks from an event',
      time: '5:05'
    },{
      link: 'http://www.bok.net/dash/tears_of_steel/cleartext/stream.mpd',
      src: '../../assets/img/tears_of_steel.jpg',
      title: 'Tears of Steel',
      description: 'A small clip from Tears of steel',
      time: '12:10'
    }]

  constructor(private uri:UriExchangeService,private router:Router,private ngZone:NgZone) { }

  ngOnInit() {
  }

  // Accepts the url of video as parameter and passes it to servive for sharing
  playVideo(uri){
    this.uri.manifestUri=uri;

    //navigate to Shaka player component
    this.ngZone.run(() => this.router.navigateByUrl('/shaka-player'))


  }



}
