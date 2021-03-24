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


  data:search[]=[
    {
      id:1,
      thumbnail:"https://placeimg.com/640/480/tech/1",
      title: "Image 1",
      description:"Description about image1 Description about image1."
    },
    {
      id:2,
      thumbnail:"https://placeimg.com/640/480/arch/2",
      title: "Image 2",
      description: "Description about image2 Description about image2."
    },
    {
      id:3,
      thumbnail: "https://placeimg.com/640/480/tech/3",
      title: "Image 3",
      description:"Description about image3 Description about image3."
    },
    {
      id:4,
      thumbnail: "https://placeimg.com/640/480/arch/4",
      title: "Image 4",
      description:"Description about image4 Description about image4."
    },
    {
      id:5,
      thumbnail: "https://placeimg.com/640/480/tech/5",
      title: "Image 5",
      description: "Description about image5 Description about image5."
    },
    {
      id:6,
      thumbnail: "https://placeimg.com/640/480/arch/6",
      title: "Image 6",
      description:"Description about image6 Description about image6."
    },
    {
      id:7,
      thumbnail: "https://placeimg.com/640/480/tech/7",
      title: "Image 7",
      description:"Description about image7 Description about image7."
    },
    {
      id:8,
      thumbnail: "https://placeimg.com/640/480/arch/8",
      title: "Image 8",
      description:"Description about image8 Description about image8."
    },
    {
      id:9,
      thumbnail: "https://placeimg.com/640/480/arch/9",
      title: "Image 9",
      description:"Description about image9 Description about image9."
    },
    {
      id:10,
      thumbnail: "https://placeimg.com/640/480/tech/10",
      title: "Image 10",
      description:"Description about image10 Description about image10."
    }
  ]


  getData():search[]{
    return this.data
  }

  getSearch():Observable<any>{
    return of(this.getData()+'?q=image');
  } 
}
