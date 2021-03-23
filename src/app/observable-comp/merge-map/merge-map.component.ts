import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }
  getData(data: any) {
    return of(data + ' Video uploaded');
  }
  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    // Ex-1
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2 => {
      //console.log(res2);
      this._du.print(res2,'elContainer1');
    }))


    // Ex-2
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    ).subscribe(res => {
      console.log(res)
      this._du.print(res,'elContainer2');
    })

    // Ex-3
    source.pipe(
      mergeMap(res => this.getData(res)),
    ).subscribe(res => {
      console.log(res)
      this._du.print(res,'elContainer3');
    })
  }

}
