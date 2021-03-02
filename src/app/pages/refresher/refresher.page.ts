import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any []= [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event: any){
    
    setTimeout(() => {
      this.items = Array(20);
      event.target.complete(); //Para que termine de cargar los datos y se cierre
    }, 1500);
  }

}
