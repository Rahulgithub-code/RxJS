import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
username:string="Rahul";
  constructor(private _designUtility:DesignUtilityService) {
    this._designUtility.username.subscribe(res=>{
      this.username=res;
    })
   }

  ngOnInit(): void {
    this._designUtility.exclusive.next(true); 
  }
ngOnDestroy(){
  this._designUtility.exclusive.next(false); 

}
}
