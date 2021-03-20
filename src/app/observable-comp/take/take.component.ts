import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  namesArr = ['Rahul', 'Vipul', 'Sonali', 'Nitu', 'Namita'];
  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex -1 | Take
    let names = from(this.namesArr).pipe(take(3));
    names.subscribe(res => {
      this._du.print(res, 'elContainer')

    })

    //Ex -2 | TakeLast
    let names2 = from(this.namesArr).pipe(takeLast(3));
    names2.subscribe(res => {
      this._du.print(res, 'elContainer2')
    })

    //Ex -2 | TakeUntil
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click')
    let source = interval(1000);
    source.pipe(
      takeUntil(condition2),
      map(
        data => "Number " + data)
    ).subscribe(res => {
      console.log(res);
      this._du.print(res, 'elContainer3');

    })
  }

}
