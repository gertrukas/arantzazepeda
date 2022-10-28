import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
        title: "Valter Kühne"
      },
      {
        path: 'molecular',
        loadChildren: () => import('./molecular/molecular.module').then(m => m.MolecularModule),
        title: "Valter Kühne / Medicina Molecular"
      },
      {
        path: 'semblanza',
        loadChildren: () => import('./semblanza/semblanza.module').then(m => m.SemblanzaModule),
        title: "Valter Kühne / Semblanza"
      },
      {
        path: 'testimoniales',
        loadChildren: () => import('./testimoniales/testimoniales.module').then(m => m.TestimonialesModule),
        title: "Valter Kühne / Testimoniales"
      },
      { 
        path: 'blog', 
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule) 
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        title: "Valter Kühne / Contacto"
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
