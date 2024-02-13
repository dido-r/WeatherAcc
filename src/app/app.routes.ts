import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'favourites', component: FavouritesComponent },
];
