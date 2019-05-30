import { UriExchangeService } from './../uri-exchange.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-tech-videos',
  templateUrl: './tech-videos.component.html',
  styleUrls: ['./tech-videos.component.css']
})
export class TechVideosComponent implements OnInit {

// stores the attributes of the video

  tiles = [
    {
      link: 'http://yt-dash-mse-test.commondatastorage.googleapis.com/media/car-20120827-manifest.mpd',
      src: '../../assets/img/self_drive_car.jpg',
      title: 'Self Driving Cars',
      description: 'Test drive of Google self Driving cars',
      time: '3:28'
    },
    {
      link: 'http://yt-dash-mse-test.commondatastorage.googleapis.com/media/feelings_vp9-20130806-manifest.mpd',
      src: '../../assets/img/google_glass.jpg',
      title: 'Google Glass',
      description: 'Working Demo of Google glass',
      time: '5:02'

    },
    {
      link: 'http://yt-dash-mse-test.commondatastorage.googleapis.com/media/motion-20120802-manifest.mpd',
      src: '../../assets/img/google_mail_motion.jpg',
      title: 'Gmail Motion',
      description: 'Gmail Motion Beta - The Inspiration Room',
      time: '4:14'

    },{
      link: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
      src: '../../assets/img/vr_playhouse.png',
      title: 'VR Playhouse',
      description: 'Virtual Reality video from VR Playhouse',
      time: '2:12'


    }


  ];

  constructor(private uri:UriExchangeService,private router:Router,private ngZone:NgZone) { }

  ngOnInit() {
  }

  // Accepts the url of video as parameter and passes it to servive for sharing
  playVideo(uri){
    this.uri.manifestUri=uri;
    console.log(this.uri.manifestUri);

  //navigate to Shaka player component
  this.ngZone.run(() => this.router.navigateByUrl('/shaka-player'))


  }

}
