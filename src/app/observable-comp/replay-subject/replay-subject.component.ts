import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  userList1 = ['1', '2'];
  userList2: any[] = [];
  userList3: any[] = [];

  subsToggle2: boolean = false;
  subsToggle3: boolean = false;

  subscribe2: Subscription = new Subscription();
  subscribe3: Subscription = new Subscription();
  subscribeInterval: Subscription = new Subscription();

  fieldHide: boolean = false;

  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {
    this._du.videoEmit.subscribe(res => {
      // console.log(res);
      this.userList1.push(res);

    })
  }
  subs2Click() {
    if (this.subsToggle2) {
      this.subscribe2.unsubscribe();
    } else {
      this.subscribe2 = this._du.videoEmit.subscribe(res => {
        this.userList2.push(res);
        console.log(res);
      })
    }

    this.subsToggle2 = !this.subsToggle2;

  }
  subs3Click() {
    if (this.subsToggle3) {
      this.subscribe3.unsubscribe();
    } else {
      this.subscribe3 = this._du.videoEmit.subscribe(res => {
        this.userList3.push(res);
        console.log(res);
      })
    }
    this.subsToggle3 = !this.subsToggle3;
  }

  onVideoAdd(value: any) {
    console.log(value);
    this._du.videoEmit.next(value);
  }
  hideControl() {
    if (!this.fieldHide) {
      const source = interval(1000);
      this.subscribeInterval = source.subscribe(res => {
        this._du.videoEmit.next('video ' + res)
      })
    } else {

      this.subscribeInterval.unsubscribe();
    }
    this.fieldHide = !this.fieldHide

  }
}
