import { Injectable } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = HEROES;
  constructor() { }

  getHeroes(): Hero[] {
    return this.heroes;
  }
}
