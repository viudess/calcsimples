import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  n1='';
  n2='';
  res=0;

  somar(){
    this.res = parseFloat(this.n1)+parseFloat(this.n2);
  }

  sub(){
    this.res = parseFloat(this.n1)-parseFloat(this.n2);
  }

  mult(){
    this.res = parseFloat(this.n1)*parseFloat(this.n2);
  }

  divd(){
    this.res = parseFloat(this.n1)/parseFloat(this.n2);
  }

}
