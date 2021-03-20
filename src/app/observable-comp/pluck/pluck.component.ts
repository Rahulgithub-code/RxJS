import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  data:any;
  data1:any;
   memArr = [
    { name:'Rahul', skill:'Angular', job: { title: 'Back-end Developer'}, exp:"10 year" },
    { name:'Vipul', skill:'TypeScript' , job: { title: 'front-end Developer'}, exp:"10 year" },
    { name:'Sonali', skill:'JavaScript' , job: { title: 'UI Developer'}, exp:"10 year" },
    { name:'Namita', skill:'Jquery' , job: { title: 'UX Developer'}, exp:"10 year" },
    { name:'Nitu', skill:'AJax' , job: { title: 'DB Developer'}, exp:"10 year" },
  ]


  constructor() { }

  ngOnInit(): void {
    from(this.memArr).pipe(
      //map(data=> data.name),
      pluck('name'),
      toArray()
    ).subscribe(res => {
      this.data = res;
    })


    from(this.memArr).pipe(
      //map(data=> data.name),
      pluck('job','title'),
      toArray()
    ).subscribe(res => {
      this.data1 = res;
    })
  }
}
