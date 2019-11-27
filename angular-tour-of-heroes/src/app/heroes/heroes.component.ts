// import { HEROES } from "./../mock-heroes";
import { Hero } from "../hero";
import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
  // Observable to emit the array of heroes—which could happen now or several minutes from now.
  // The subscribe() method passes the emitted array to the callback,
  // which sets the component's heroes property.
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
}
