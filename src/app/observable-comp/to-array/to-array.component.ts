import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators/'

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  sourceSub: Subscription = new Subscription();
  users = [
    { name: 'Rahul', skill: 'Angular' },
    { name: 'Vipul', skill: 'TypeScript' },
    { name: 'Sonali', skill: 'JavaScript' }
  ];

  constructor() { }
  ngOnInit(): void {

    //ex-1
    const source = interval(1);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe(data => {
      console.log(data);

      // ex-2
      const source2 = from(this.users);
      source2.pipe(toArray()).subscribe(data => {
        console.log(data);
      });

      //Ex-3
      const source3 = of('Rahul','Vipul','Sonali')
      source3.pipe(toArray()).subscribe(data=>{
        console.log(data);
        
      })
    })
  }

}
