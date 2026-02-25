import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe]
  // styleUrl: './counter-page.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPage {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description
  })

  // getHeroDescription() {
  //   return `${this.name()} is ${this.age()} years old.`;
  // }

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update(() => 60);
  }

  // setNameCapitalized() {
  //   return `${this.name().toUpperCase()}`;
  // }
}
