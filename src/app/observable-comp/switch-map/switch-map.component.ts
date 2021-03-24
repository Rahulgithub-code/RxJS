import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex-1
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      this._du.print(res,'elContainer1');
    })

    //Ex-2 
    source.pipe(
      concatMap(res => this.getData(res)),
      
    ).subscribe(res => {
      this._du.print(res,'elContainer2');
    })
    //Ex-3
    source.pipe(
      switchMap(data => this.getData(data))
    ).subscribe(res => {
      this._du.print(res,'elContainer3');
    })
  }
  getData(data: any) {
    return of(data + ' Video uploaded').pipe(delay(1000));
  }
}
