import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'storefront-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'book-outline',
      name: 'Contexto',
      redirecTo:'/contexto',
    },
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirecTo:'/registro',
    },
  ];




}
