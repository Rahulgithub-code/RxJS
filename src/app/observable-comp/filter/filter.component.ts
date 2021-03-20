import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
data1:any;
data2:any;
data3:any;
  dataArr =[
    { id:1, name:'Rahul',  gender:'male'},
    { id:2, name:'Vipul',  gender:'male'},
    { id:3, name:'Sonali',  gender:'female'},
    { id:4, name:'Namita',  gender:'female'},
    { id:5, name:'Nitu',  gender:'female'}
  ]

  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr);

    // Ex -01
    source.pipe(filter(memder => memder.name.length>4),toArray()).subscribe(res=>{
      //console.log(res);
      this.data1 = res;
    });


    //Ex -02
    source.pipe(filter(memder => memder.gender=='female'),toArray()).subscribe(res=>{
      //console.log(res);
      this.data2 = res;
    })

    //Ex - 03
    source.pipe(filter(member => member.id<=3),toArray()).subscribe(res=>{
      //console.log(res);
      this.data3=res;
      
    })
  }

}
