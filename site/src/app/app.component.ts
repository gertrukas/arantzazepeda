import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  constructor(
      private primengConfig: PrimeNGConfig,
      private titleService: Title
      ) {
      titleService.setTitle('bienvenido');
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
