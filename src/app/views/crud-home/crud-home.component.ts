import { Component, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { MessagesService } from 'src/app/services/messages.service';
import { SuperHeroService } from 'src/app/services/super-hero.service';


@Component({
    selector: 'app-crud-home',
    templateUrl: './crud-home.component.html',
    styleUrls: ['./crud-home.component.css'],
})
export class CrudHomeComponent implements OnInit {
    title = 'SuperHero.UI';

    heroes: SuperHero[] = [];

    heroToEdit?: SuperHero;
    constructor(
        private superHeroService: SuperHeroService,
        public messagesService: MessagesService
    ) {}
    ngOnInit(): void {
        this.superHeroService
            .getSuperHeroes()
            .subscribe((result: SuperHero[]) => {
                this.heroes = result;
            });
    }

    updateHeroesList(heroes: SuperHero[]) {
        this.heroes = heroes;
    }

    initNewHero() {
        this.heroToEdit = new SuperHero();
        this.messagesService.openPopup();
    }

    editHero(hero: SuperHero) {
        this.heroToEdit = hero;
        this.messagesService.openPopup();
    }
}
