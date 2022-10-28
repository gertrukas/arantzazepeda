import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { AnimationsComponent } from './animations/animations.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AnimationsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
