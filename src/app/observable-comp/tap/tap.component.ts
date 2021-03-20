import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  colorData:string='';

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    const source =  interval(1500);
    let subs1:Subscription;
    let subs2:Subscription;
    // Ex-01
    const arr=['Rahul', "Vipul",'Sonali', 'Namita', 'Nitu']
    subs1=source.pipe(
      tap(data=>{
        //console.log('tap-before=>'+ data);
        if(data==4){
          subs1.unsubscribe()
        }
      }),
      map(data=> arr[data]),
      tap(data=>{
        //console.log('tap-after=>' + data);
        
      })
    ).subscribe(res=>{
      //console.log(res);
      this._du.print(res,'elContainer')
    })

    // Ex-02
    const color= ['red', 'blue', 'pink', 'orange','green','yellow', 'purple']
    subs2 = source.pipe(
      tap(data=>{
        if(data==7){
          this.colorData=''
          subs2.unsubscribe();
        }
      }),
      map(data=> color[data]),
      tap(data=>{
        this.colorData=data;
      })
    ).subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainer1')

    })
  }

}
