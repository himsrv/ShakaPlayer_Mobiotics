
import { UriExchangeService } from './uri-exchange.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  constructor(private uri:UriExchangeService,private router:Router,private ngZone:NgZone){}


  //Stop playing video on close
  closeModal(){
    this.uri.manifestUri='';

    //navigating to root on modal close
    this.ngZone.run(()=>this.router.navigateByUrl('/'));
  }
}



