import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  subs1: Subscription;
  msg1: string;
  subs2: Subscription;
  msg2: any;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    const broadcast = interval(1000);


    // Ex- 01
    this.subs1 = broadcast.pipe(
      map(data => //console.log(data)
        data = "Video " + data
      )
    ).subscribe(res => {
      //console.log(res);
      this.msg1 = res;
    })
    setTimeout(() => {
      this.subs1.unsubscribe();
    }, 11000);


    //Ex 02 
    this.subs2 = broadcast.pipe(
      map(data=>
        data*10
      )
    ).subscribe(res => {
      //console.log(res);
      this.msg2=res;
    })
    setTimeout(() => {
      this.subs2.unsubscribe();
    }, 11000)


    // Ex 03
    let memArr = from([
      {id:1, name:'Rahul'},
      {id:2, name:'Vipul'},
      {id:3, name:'Sonali'},
      {id:4, name:'Namita'},
      {id:5, name:'Nitu'},
      {id:6, name:'Priyanka'}
    ])

    memArr.pipe(
      map(data => data.name)
    ).subscribe(data =>{
      //console.log(data);
      this._designUtility.print(data,'elContainer')
    })
  }

}
