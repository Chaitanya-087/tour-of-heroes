import { Component } from "@angular/core";
import { Hero } from "../Hero";
import { HeroService } from "../services/hero.service";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { NgFor } from "@angular/common";

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.component.css"],
    standalone: true,
    imports: [NgFor, HeroDetailComponent],
})
export class HeroesComponent{
  heroes:Hero[] = [];
  selectedHero?: Hero;
  constructor (private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
