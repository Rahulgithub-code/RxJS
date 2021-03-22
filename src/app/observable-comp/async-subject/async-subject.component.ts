import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {


  constructor(private _du: DesignUtilityService) { }
  asyncVideoEmit:any;
  ngOnInit(): void {
    this._du.asyncVideoEmit.subscribe(res=> {
      this.asyncVideoEmit = res; 
    })
  }
  onVideoAdd(value: any) {
    console.log(value);
    this._du.asyncVideoEmit.next(value);
  }
  onComplete(){

this._du.asyncVideoEmit.complete();
  }

}
