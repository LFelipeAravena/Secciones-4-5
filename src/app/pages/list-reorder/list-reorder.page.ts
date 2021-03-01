import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[]= ['Aquaman','Superman','Batman','Mujer Maravilla','Flash'];
  
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  reorderDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event:any){
    
    this.personajes = event.detail.complete(this.personajes);
    console.log(this.personajes);
  }

  toggleReorderGroup(){
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  

}





    //console.log(event);
    //const itemMover = this.personajes.splice(event.detail.from, 1)[0]; //Cambiar un elemento del arreglo