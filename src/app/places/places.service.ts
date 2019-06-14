import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Britney_Spears_MSG.jpg/120px-Britney_Spears_MSG.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Paris_raining_autumn_cityscape_%288252181936%29.jpg/120px-Paris_raining_autumn_cityscape_%288252181936%29.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Watervapor_cup.jpg/120px-Watervapor_cup.jpg',
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(
      p => p.id === id
    )};
  }
}
