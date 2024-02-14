import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'favourites', component: FavouritesComponent },
    { path: '**', component: NotFoundComponent }
];
