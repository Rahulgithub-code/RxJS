import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-concat-map2',
  templateUrl: './concat-map2.component.html',
  styleUrls: ['./concat-map2.component.scss']
})
export class ConcatMap2Component implements OnInit {

  notifyData=[
    {name:'Facebook', 
    img1:'https://placeimg.com/50/50/tech/1',
    time:'4 Second Ago.',
    img2:'https://placeimg.com/50/50/tech/1',
    strong: 'Alex Johnson',
    p: 'Commented on your Post !!! Thanks.'
  },
  {name:'twiter', 
    img1:'https://placeimg.com/50/50/tech/2',
    time:'3 Second Ago.',
    img2:'https://placeimg.com/50/50/tech/2',
    strong: 'Rahul',
    p: 'Commented on your Post !!! Thanks.'
  },
  {name:'Facebook', 
    img1:'https://placeimg.com/50/50/tech/3',
    time:'1 Second Ago.',
    img2:'https://placeimg.com/50/50/tech/3',
    strong: 'Alex Johnson',
    p: 'Commented on your Post !!! Thanks.'
  },
  {name:'Facebook', 
    img1:'https://placeimg.com/50/50/tech/4',
    time:'7 Second Ago.',
    img2:'https://placeimg.com/50/50/tech/4',
    strong: 'Alex Johnson',
    p: 'Commented on your Post !!! Thanks.'
  }
  ]

  
    constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    from(this.notifyData).pipe(
      concatMap(res => this.getHtml(res))
    ).subscribe((res:any) => {
      this._du.print2(res,'elContainer');
    })
  }
  getHtml(data:any){
    return of(`
    <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; padding: 5px 0 10px; " >
        <div class="app">
           <img src="${data.img1}" width="20">
            ${data.name}
        </div>
        <div style="opacity: .3; font-size: 12px; font-weight: 500;">${data.time}</div> 
    </div>
    <div style="font-size: 13px; line-height: normal;">
        <img src="${data.img2}"  style="float: right;margin: 0 0 0 10px; border: 1px solid #989898;">
        <strong>${data.strong}</strong>
        <p>${data.p}</p>
    </div>
`).pipe(delay(2000))
  }

}
