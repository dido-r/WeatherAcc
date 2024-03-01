import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UnitService } from '../unit.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ],
    template: `
    <header>
      <a routerLink='' (click)="onRedirect()">Home</a>
      <a routerLink='favourites' (click)="onRedirect()">Favoutires</a>
      <a (click)="showPreferences()">Preferences</a>
      <ul *ngIf="preferences">
        <li>
            <input type="checkbox" [checked]="!isLightTheme" id="theme" (change)="themeChange()"/><label for="theme"></label>
            <p>Theme</p>
        </li>
        <li>
            <input type="checkbox" [checked]="!isMetric" id="unit" (change)="unitChange()"/><label for="unit"></label>
            <p>Unit</p>
        </li>
      </ul>
    </header>
  `,
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    constructor(
        private serviceUnit: UnitService
    ) {}

    preferences = false;
    isLightTheme = true;
    isMetric = this.serviceUnit.unitOnStart === 'true';

    ngOnInit(){

        let theme = localStorage.getItem('isLightTheme');

        if(theme === null){

            localStorage.setItem('isLightTheme', 'true');
            return;
        }

        this.isLightTheme = theme === 'true' ? true : false;

        document.body.setAttribute(
            'theme',
            this.isLightTheme ? 'light' : 'dark'
        );
    }

    showPreferences() {

        this.preferences = !this.preferences;
    }

    themeChange() {

        this.isLightTheme = !this.isLightTheme;

        document.body.setAttribute(
            'theme',
            this.isLightTheme ? 'light' : 'dark'
        );

        localStorage.setItem('isLightTheme', `${this.isLightTheme}`);
    }

    unitChange(){

        this.isMetric = !this.isMetric; 
        this.serviceUnit.changeUnit();
    }

    onRedirect(){
        
        this.preferences = false;
    }
}