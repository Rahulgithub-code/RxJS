import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person: any;
  fetching: boolean = false;
  status="No Data";
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  getData() {
    this.fetching=true;
    this._http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => {
      
      setTimeout(() => {
        console.log(res);
        this.person = res;
        this.fetching=false;
        this.status="Data Fetched";
      }, 1500);
    }, 
    (err)=>{
    this.fetching=false;
    this.status="Problem in fetching data";
    })
  }

}
