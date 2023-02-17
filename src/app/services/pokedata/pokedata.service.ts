import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokedataService {
  searchPokemon(searchText: any): any {
    throw new Error('Method not implemented.');
  }
  constructor(private _http: HttpClient) {}

  // Get Pokemon
  getPokemon(searchTerm: string) {
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
  }
}
