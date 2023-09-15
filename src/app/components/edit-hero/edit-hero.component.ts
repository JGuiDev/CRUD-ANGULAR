import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from './../../services/super-hero.service';
import { MessagesService } from './../../services/messages.service';

@Component({
    selector: 'app-edit-hero',
    templateUrl: './edit-hero.component.html',
    styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent implements OnInit {
    @Input() hero?: SuperHero;
    @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

    heroes: SuperHero[] = [];
    constructor(
        private SuperHeroService: SuperHeroService,
        public messagesService: MessagesService
    ) {}
    ngOnInit(): void {
        this.SuperHeroService.getSuperHeroes().subscribe(
            (heroes: SuperHero[]) => {
                this.heroes = heroes;
            }
        );
    }

    updateHero(hero: SuperHero) {
        if (
            !hero ||
            !hero.name ||
            !hero.firstName ||
            !hero.lastName ||
            !hero.place
        ) {
            return;
        }

        const isDuplicate = this.heroes.some(
            (existingHero) => existingHero.name === hero.name
        );

        if (isDuplicate) {
            return;
        }
        this.SuperHeroService.updateHero(hero).subscribe(
            (heroes: SuperHero[]) => this.heroesUpdated.emit(heroes)
        );
        this.messagesService.closePopup();
    }

    deleteHero(hero: SuperHero) {
        this.SuperHeroService.deleteHero(hero).subscribe(
            (heroes: SuperHero[]) => this.heroesUpdated.emit(heroes)
        );
        this.messagesService.closePopup();
    }

    createHero(hero: SuperHero) {
        if (
            !hero ||
            !hero.name ||
            !hero.firstName ||
            !hero.lastName ||
            !hero.place
        ) {
            return;
        }

        const isDuplicate = this.heroes.some(
            (existingHero) => existingHero.name === hero.name
        );

        if (isDuplicate) {
            return;
        }

        this.SuperHeroService.createHero(hero).subscribe(
            (heroes: SuperHero[]) => this.heroesUpdated.emit(heroes)
        );
        this.messagesService.closePopup();
    }
}
