import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { ImageGalleryPipe } from './image-gallery.pipe';
import { TruncatePipe } from './truncate.pipe';
import { SafeHtmlPipe } from './keep-html.pipe';




@NgModule({
  declarations: [
    ImagePipe,
    ImageGalleryPipe,
    TruncatePipe,
    SafeHtmlPipe


  ],
  exports: [
    ImagePipe,
    ImageGalleryPipe,
    TruncatePipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
