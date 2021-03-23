import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive= new Subject<boolean>();
  username = new BehaviorSubject<string>('Rahul');
  videoEmit= new ReplaySubject<string>(3, 5000)   //(last3Item , Last 5 sec updated data)
  asyncVideoEmit = new AsyncSubject();
  constructor() { }
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
}
