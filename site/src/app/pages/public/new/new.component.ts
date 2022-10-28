import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NewsService } from "../../../services/news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {

  blog: any;

  constructor(private service: NewsService,
              private activateRouter: ActivatedRoute) {
    this.activateRouter.params.subscribe( params => {
      this.getData(params['blog']);
    });
  }

  ngOnInit(): void {

  }

  getData(slug: string) {
    this.service.getNewsD(slug).subscribe(response => {
      this.blog = response.blog;
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
