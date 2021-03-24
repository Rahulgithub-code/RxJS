import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.scss']
})
export class SwitchMap2Component implements AfterViewInit {
  @ViewChild('searchForm') searchForm: NgForm;
  data: any[];
  searchResultCount:any;
  constructor(private _du: DesignUtilityService , private loadingBar:LoadingBarService) {
  }

  ngAfterViewInit(): void {
    
    const formValue = this.searchForm.valueChanges;
    formValue?.pipe(
      filter(() => this.searchForm.form.dirty),
      //map(data=> data['searchTerm'])
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this._du.getSearch(data))
    ).subscribe(res => { 
      console.log(res);
      this.data = res
      this.searchResultCount = Object.keys(res).length;
      this.loadingBar.start();
      console.log(this.data);
      setTimeout(() => {
      if(this.data){
        this.loadingBar.stop();
      }
      });
    }
    )
  }

}
