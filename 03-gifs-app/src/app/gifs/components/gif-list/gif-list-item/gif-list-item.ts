import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifListItem {
  // @Input() imageUrl: string = '';
  imageUrl = input.required<string>();
}
