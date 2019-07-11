import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  ItemsArray: ItemIsudos[] = [
    {
      icon: 'beer',
      name: 'action-sheet',
      redirectTo: '/action-sheet'    
    },
    {
      icon: 'alert',
      name: 'Alert',
      redirectTo: '/alert'    
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface ItemIsudos{
  icon: string;
  name: string;
  redirectTo: string; 

}