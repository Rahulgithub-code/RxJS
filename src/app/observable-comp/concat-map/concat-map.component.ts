import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { concatAll, concatMap, delay, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }
  getData(data: any) {
    return of(data + ' Video uploaded').pipe(delay(2000));
  }
  ngOnInit(): void {
    const source = from( ['Tech','Comedy','News']);

    //ex -01
    source.pipe(
      map(res=> this.getData(res))
    ).subscribe(res=> res.subscribe(res2=> {
      //console.log(res2);
      this._du.print(res2, 'elContainer1') 
    }))

    //ex -02
    source.pipe(
      map(res=> this.getData(res)),
      concatAll()
    ).subscribe(res=>{
      console.log(res);
      this._du.print(res, 'elContainer2') 
    })

    //ex -03
    source.pipe(
      concatMap(res=> this.getData(res)),
    ).subscribe(res=>{
      console.log(res);
      this._du.print(res, 'elContainer3') 
    })
  }

}
