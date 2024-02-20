import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
            <input type="checkbox" id="unit" /><label for="unit"></label>
            <p>Unit</p>
        </li>
      </ul>
    </header>
  `,
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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

    preferences = false;
    isLightTheme = true;

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
        this.preferences = false;
    }

    onRedirect(){
        
        this.preferences = false;
    }
}