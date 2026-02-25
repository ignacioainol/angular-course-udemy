import { Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {
  listName = input<string>('');
  characters = input.required<Character[]>();
}
