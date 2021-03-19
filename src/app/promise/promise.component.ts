import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  /*
    hpLaptop = { id: 1, brand: "Hp", price: 35000 };
    dellLaptop = { id: 2, brand: "Dell", price: 45000 };
    verBind: any;
    constructor() { }
  
    IsDellAvailable(): boolean {
      return false;
    }
  
    IsHpAvailable(): boolean {
      return true;
    }
  
    ngOnInit(): void {
      let buyLaptop = new Promise((resolve, reject) => {
        if (this.IsDellAvailable()) {
          return setTimeout(() => {
            resolve(this.dellLaptop);
          }, 3000);
        }
        else if (this.IsHpAvailable()) {
          return setTimeout(() => {
            resolve(this.hpLaptop);
          }, 3000);
        } else {
          return setTimeout(() => {
            reject("laptop is not available.");
          }, 3000);
        }
      })
      buyLaptop.then(res => {
        this.verBind=res;
        console.log(res);
      });
      buyLaptop.catch(res => {
        this.verBind=res;
        console.log(res);
      });
    }
    */
  result1: any = 'Data';
  dell = { id: 1, name: 'Dell Epson', price: 36000, color: 'black' };
  buylaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 5000);
  })
  buylaptop2 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

  ngOnInit() {
  }

  result1Fun() {
    this.result1 = "Fetching data . . .";
    this.buylaptop.then(res => {
      this.result1 = JSON.stringify(res);

    })
  }

  result2: any = "Data";
  async result2Fun() {
    this.result2 = "Fetching data . . .";
    let data = await this.buylaptop;
    this.result2 = JSON.stringify(data);
  }

  /* using Promise
  result3:any="Data";
  result3Fun(){
    this.result3 = "Fetching data . . ."
    this.buylaptop2.then(res=>{
    this.result3 = JSON.stringify(res);
    }); 
  }
  */
  result3: any = "Data";
  async result3Fun() {
    this.result3 = "Fetching data . . ."
    let res = await this.buylaptop2;
    this.result3 = JSON.stringify(res);
  }

}