import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente []= [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirecTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirecTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirecTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirecTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite',
      redirecTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Iput Forms',
      redirecTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirecTo: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'List - Reorder',
      redirecTo: '/list-reorder'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
