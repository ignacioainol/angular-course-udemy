import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { AddCharacterComponent } from '../../components/dragonball/add-character/add-character';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: 'dragonball-super.html',
  imports: [CharacterList, AddCharacterComponent],
})
export class DragonBallSuperComponent {
  public dragonballService = inject(DragonballService);
}
