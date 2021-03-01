import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Felipe';
  usuario = {
    email:'',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit( formulario : NgForm){
    console.log('submit');
    console.log(this.usuario);//rescatar info del formlario
    console.log(formulario);//rescatar toda la info del formulario, teniendo en cuenta que se paso la referencia del formulario en el metodo del form del html

  }

}
