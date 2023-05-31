import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, delay } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;

  constructor(
    private heroesServices: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

    goBack(){
      this.router.navigateByUrl('heroes/list');
    }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({id}) => this.heroesServices.getHeroById(id))
      ).subscribe( hero =>{
        if(!hero) return this.router.navigate(['/heroes/list'])
        this.hero=hero;
        return
      })
  }
}
