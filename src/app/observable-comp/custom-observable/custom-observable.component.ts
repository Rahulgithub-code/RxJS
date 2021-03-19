import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  names: any;
  ulStatus: any;
  ulStatus1: any;
  badgeStatus:any;
  subs2: Subscription = new Subscription();
  subs3: Subscription = new Subscription();
  constructor(private _utility: DesignUtilityService) { }

  ngOnInit(): void {
    //Ex-01 Manual
    const cusObs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next("Angular");
      }, 1000);
      setTimeout(() => {
        observer.next("Java");
      }, 2000);
      setTimeout(() => {
        observer.next("RxJS");
        //observer.error(new Error("Error"));
        observer.complete();

      }, 3000);
      setTimeout(() => {
        observer.next("Jquery");

      }, 4000);
      setTimeout(() => {
        observer.next("TypeScript");

      }, 5000);
    })
    cusObs1.subscribe((res: any) => {
      this._utility.print(res, 'elContainer');
    },
      (err: any) => {
        this.ulStatus = "error";
      },
      (comp: any) => {
        this.ulStatus = "completed";
      }
    )


    //Ex-02 Manual
    let count = 0;
    const arr = ["Angular", "Java", "Rxjs", "Jquery", "TypeScript"]
    const cusObs2 = Observable.create((observer: any) => {
      setInterval(() => {

        observer.next(arr[count]);
        if (count >= 2) {
          observer.error();
        }
        count++;
      }, 1000)
    });

    this.subs2 = cusObs2.subscribe((res: any) => {
      this._utility.print(res, 'elContainer1');
    },
      (err: any) => {
        this.ulStatus1 = "error";
      },
      (comp: any) => {
        this.ulStatus1 = "completed";
      }
    )


    // Ex-03 
    let count1=0;
    const arr2 = ['Rahul', 'Vipul', 'Sonali', 'Namita', 'Deepak','Nitu']
    const cusObs3 = Observable.create((observer: any) => {
      setInterval(() => {
        observer.next(arr2[count1]);
        // if (count1 >= 3) {
        //   observer.error("Error");
        // }
        if (count1 >= 5) {
          observer.complete();
        }
        count1++;
      }, 1000)
    });

    this.subs3 = cusObs3.subscribe((res: any) => {
     //console.log(res);
     this.names = res
    },(err: any) => {
      this.badgeStatus = "error";
    },
    (comp: any) => {
      this.badgeStatus = "completed";
    }
    )
  }
  ngOnDestroy() {
    this.subs2.unsubscribe();
  }
}
