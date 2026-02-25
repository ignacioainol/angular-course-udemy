import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifListItem } from './gif-list-item/gif-list-item';

@Component({
  selector: 'gif-list',
  imports: [CommonModule, GifListItem],
  templateUrl: './gif-list.html',
})
export class GifList {
  gifs = input.required<string[]>();
}
