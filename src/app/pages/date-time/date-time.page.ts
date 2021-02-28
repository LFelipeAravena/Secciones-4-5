import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customYearValues = [2010,2019.2015,2020,2040,2050];

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event){
    console.log(event);
    console.log(event.detail.value);
  }

}
