import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UnitService {

    unitOnStart = localStorage.getItem('isMetric') === null ? 'true' : localStorage.getItem('isMetric');
    private unit = new BehaviorSubject(this.unitOnStart === 'true');
    isMetric = this.unit.asObservable();

    changeUnit() {

        this.unit.next(!this.unit.getValue());
        localStorage.setItem('isMetric', `${this.unit.getValue()}`);
    }
}