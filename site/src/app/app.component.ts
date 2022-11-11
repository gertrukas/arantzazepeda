import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  fbImage = "https://arantzazepeda.com/assets/images/arantza-zepeda.jpeg";

  constructor(
      private primengConfig: PrimeNGConfig,
      private metaService: Meta
      ) {


    this.metaService.updateTag({ property: 'og:url', content: 'https://arantzazepeda.com' });
      this.metaService.updateTag({ property: 'og:title', content: 'Arantza Zepeda'});
      this.metaService.updateTag({ property: 'og:description', content: 'Arantza Zepeda Golf'});
      this.metaService.updateTag({ property: 'og:image', content: this.fbImage});
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
