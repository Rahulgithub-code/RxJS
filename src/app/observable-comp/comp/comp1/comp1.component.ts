import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  username:string;
  constructor(private _designUtility:DesignUtilityService) { 
    this._designUtility.username.subscribe(res=>{
      this.username=res;
    })
  }

  ngOnInit(): void {
  }
  onChange(value:any){
    console.log(value);
    this._designUtility.username.next(value)
  }

}
