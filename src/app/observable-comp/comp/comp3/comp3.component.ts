import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

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
