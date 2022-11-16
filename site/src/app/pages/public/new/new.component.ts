import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NewsService } from "../../../services/news.service";

import { ActivatedRoute } from "@angular/router";
import {Title, Meta, DomSanitizer} from '@angular/platform-browser';
import { environment } from "../../../../environments/environment";
import { Blog } from "../../../interfaces/blog";




@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})

export class NewComponent implements OnInit {

  url = environment.apiUrl + '/news/';

  blog: Blog = {
    _id: '',
    name: '',
    description: '',
    image: '',
    slug: '',
    date:  new Date()
  };

  linkface:any;
  imglink: any;
  view: boolean = false;

  fbUrl: string = "";

  constructor(private service: NewsService,
              private activateRouter: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private titleService: Title,
              private metaService: Meta,

  ) {

       this.activateRouter.params.subscribe( params => {
          this.getData(params['blog']);
       });

  }

  ngOnInit(): void {}

  getData(slug: string) {

    this.service.getNewsD(slug).subscribe(response => {
      this.blog = response.blog;

      console.log(this.blog);

      this.titleService.setTitle( 'Arantza Zepeda / comunicado / ' + this.blog.name );

      this.metaService.updateTag({ property: 'og:url', content: environment.pageUrl + '/blog/' + this.blog.slug});
      this.metaService.updateTag({ property: 'og:title', content: this.blog.name});
      this.metaService.updateTag({ property: 'og:description', content: this.blog.description});

      let ilink = 'https://backend.arantzazepeda.com/uploads/news/' + this.blog.image;
      this.imglink = this.sanitizer.bypassSecurityTrustResourceUrl(ilink);

      this.metaService.updateTag({ property: 'og:image', content: this.imglink });

      let link = 'https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Farantzazepeda.com%2Fblog%2F'
        + slug + '&width=450&layout=standard&action=like&size=small&share=true&height=35&appId=875029200167861';
      this.linkface = this.sanitizer.bypassSecurityTrustResourceUrl(link);



      this.view = true;

    }, error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Error al recibir la informacion',
          timer: 2000
        });
      });

  }

}
