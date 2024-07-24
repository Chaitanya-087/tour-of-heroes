import { Component } from "@angular/core";
import { Hero } from "../Hero";
import { HeroService } from "../services/hero.service";
import { NgFor } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.component.css"],
    standalone: true,
    imports: [NgFor, RouterLink],
})
export class HeroesComponent{
  heroes:Hero[] = [];
  constructor (private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((data: Hero[]) => {
      this.heroes = data;
    });
  }
}
