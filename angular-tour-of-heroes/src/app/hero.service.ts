import { HEROES } from "./mock-heroes";
import { Hero } from "./Hero";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
@Injectable({
  providedIn: "root"
})
// Services feels a lot like Redux
export class HeroService {
  // This is a typical "service-in-service" scenario:
  // you inject the MessageService into the HeroService
  // which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
    // of(HEROES) returns an Observable<Hero[]> that emits a single value,
    //  the array of mock heroes. this was before adding messageService
  }
}