import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMgs:any;

  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    //OF
    const obs1 = of('Rahul','Vipul','Sonali')
    obs1.subscribe(data=>{
      this._designUtility.print(data,'elContainer');
    });

    const obs2 = of({a:'Rahul',b:'Vipul',c:'Sonali'})
    obs2.subscribe(data=>{
     
      this.obsMgs = data;
      //console.log(this.obsMgs);
    });

    //from
    const obs3 = from(['Rahul','Vipul','Sonali']); 
    obs3.subscribe(data=>{
      this._designUtility.print(data,'elContainer1');
    });
    
    //from Promise

    const promise = new Promise(resolve=>{
      setTimeout(() => {
        resolve("Promise resolved")
      }, 3000);
    })

    const obs4 = from(promise);
    obs4.subscribe(res=>{
      console.log(res);
      let nRes=JSON.stringify(res)
      this._designUtility.print(nRes,'elContainer3')
      
    });
    const obs5 = from('Hello Rahul');
    obs5.subscribe(res=>{
      this._designUtility.print(res,'elContainer4')
    });


  }

}
