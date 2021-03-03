import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getUsuarios(){ //Un observable
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes(){ //Un observable de search
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  
  getMenuOpts(){ //Un observable
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getHeroes(){ //Un observable
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
               .pipe(
                  delay(1500)
               );
  }

}
