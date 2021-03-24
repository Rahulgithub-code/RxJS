import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, pluck } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/app-service/design-utility.service';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.scss']
})
export class SwitchMap2Component implements AfterViewInit {
  @ViewChild('searchForm') searchForm: NgForm;
  data: any[];

  constructor(private _du: DesignUtilityService) {
    
  }

  ngAfterViewInit(): void {
    this._du.getSearch().subscribe(res=> {
      console.log(res);
      
    })
    const formValue = this.searchForm.valueChanges;
    formValue?.pipe(
      //map(data=> data['searchTerm'])
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(res => { 
      console.log(res);
    }
    )
  }

}
