import { Injectable } from '@angular/core';
import { FavouriteLocation } from './favourite-location';

@Injectable({
    providedIn: 'root'
})

export class FavouritesService {

    list = [] as FavouriteLocation[];

    constructor() {
        this.initLocalStorage();
        this.getList();
    }

    addToFavourite(location: FavouriteLocation) {

        this.list.push(location);
        localStorage.setItem('favourite-list', JSON.stringify(this.list));
    }

    removeFromFavourite(key: string) {

        this.list = this.list.filter(x => x.id !== key);
        localStorage.setItem('favourite-list', JSON.stringify(this.list));
    }

    checkInFavourites(key: string) {

        return this.list.find(x => x.id === key);
    }

    getFavourites(): FavouriteLocation[] {

        return this.list;
    }

    private initLocalStorage() {
        
        if(localStorage.getItem('favourite-list') === null){
            
            localStorage.setItem('favourite-list', '')
        }
    }
    
    private getList(){
        
        let localStorageList = localStorage.getItem('favourite-list');
        
        if(localStorageList !== ''){
            
            this.list = JSON.parse(localStorageList!);
        }
    }
}