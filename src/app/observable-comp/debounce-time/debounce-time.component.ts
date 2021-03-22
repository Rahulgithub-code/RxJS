import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput1') myInput: ElementRef;
  reqData: any= null;

  @ViewChild('myInput2') myInput2: ElementRef;
  reqData2: any= null;
  constructor(private loadingBar:LoadingBarService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {

    //Ex - 01 DebounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(data => data.target.value),
      debounceTime(500)
    );
    searchTerm.subscribe(res => {
      console.log(res);
      this.reqData= res;
      this.loadingBar.start();
      setTimeout(() => {
        this.reqData= null;
        this.loadingBar.stop()
      }, 1000);
    })



     //Ex - 02 DebounceUntilChange
     const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(data => data.target.value),
      debounceTime(500),
      distinctUntilChanged()

    );
    searchTerm2.subscribe(res => {
      console.log(res);
      this.reqData2= res;
      this.loadingBar.start();
      setTimeout(() => {
        this.reqData2= null;
        this.loadingBar.stop()
      }, 1000);
    })



  }

}
