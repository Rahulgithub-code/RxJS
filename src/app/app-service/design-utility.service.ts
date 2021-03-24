import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { search } from '../app-interface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive= new Subject<boolean>();
  username = new BehaviorSubject<string>('Rahul');
  videoEmit= new ReplaySubject<string>(3, 5000)   //(last3Item , Last 5 sec updated data)
  asyncVideoEmit = new AsyncSubject();

  constructor(private http:HttpClient) { }

  print(val:string, containerId:any){
    let el = document.createElement('li');
    el.innerText=val;
    document.getElementById(containerId)?.appendChild(el);
  }

  print2(val:string, containerId:any){
    let el = document.createElement('div');
    el.setAttribute('class', 'item')
    el.innerHTML=val;
    document.getElementById(containerId)?.prepend(el);
  }

  url_id = "https://jsonplaceholder.typicode.com/photos";


  getSearch(searchTerm:any):Observable<any>{
    return this.http.get<any>(this.url_id+'?q='+searchTerm)
  }

}

