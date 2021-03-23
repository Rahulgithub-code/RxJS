import { Component, OnInit } from '@angular/core';
import { interval, concat, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(5000).pipe(map(v=>'Tech Video #'+ (v+1)),take(5));
    const sourceComedy = interval(1000).pipe(map(v=>'Comedy Video #'+ (v+1)),take(3));
    const sourceNews = interval(1000).pipe(map(v=>'News Video #'+ (v+1)),take(4));

    const all = merge(sourceTech,sourceComedy,sourceNews)

    all.subscribe(res=> {
      console.log(res);
      this._du.print(res,'elContainer')
      
    })
  }

}
