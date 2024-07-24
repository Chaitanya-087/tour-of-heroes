import { Injectable } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = HEROES;
  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    const hero = this.heroes.find(hero => hero.id === id)!;
    return of(hero)
  }
}
