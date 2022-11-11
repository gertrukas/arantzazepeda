import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NewsService } from "../../../services/news.service";

import { ActivatedRoute } from "@angular/router";
import { Title, Meta} from '@angular/platform-browser';
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
    slug: '',
    date:  new Date()
  };
  view: boolean = false;

  fbUrl: string = "";

  constructor(private service: NewsService,
              private activateRouter: ActivatedRoute,
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

      console.log( environment.pageUrl );
      this.fbUrl = "https://arantzazepeda.com/blog/torneo-de-la-amistad";
      //this.fbUrl = environment.pageUrl + 'blog/' + this.blog.slug;
      console.log( this.fbUrl );


      this.titleService.setTitle( 'Arantza Zepeda / comunicado / ' + this.blog.name );

      this.metaService.updateTag({ property: 'og:url', content: environment.pageUrl + '/blog/' + this.blog.slug});
      this.metaService.updateTag({ property: 'og:title', content: this.blog.name});
      this.metaService.updateTag({ property: 'og:description', content: this.blog.description});

      this.metaService.updateTag({ property: 'og:image', content: this.url + this.blog._id });
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
