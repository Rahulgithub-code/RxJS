import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription: Subscription = new Subscription();
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
   // const broadcast = interval(500);
   //timer(delay,interval);
   const broadcast = timer(5000,500);

    this.videoSubscription = broadcast.subscribe(data => {
      if(data>=4){
        this.videoSubscription.unsubscribe();
      }
      this.obsMsg = 'Video ' + (data+1);
      this._designUtility.print(this.obsMsg, 'elContainer1');
      this._designUtility.print(this.obsMsg, 'elContainer2');
      this._designUtility.print(this.obsMsg, 'elContainer3');
    });
  }
}