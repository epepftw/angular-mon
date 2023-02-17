import { Component, OnInit } from '@angular/core';
import { PokedataService } from 'src/app/services/pokedata/pokedata.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  searchTerm: string = '';
  searchResults: any;

  constructor(private _dataService: PokedataService) {}

  ngOnInit(): void {
    this.searchTerm = 'Ditto';
    this.search();
  }

  getTypeBackgroundColor(typeName: string): string {
    switch (typeName.toLowerCase()) {
      case 'normal':
        return '#A8A878'; // light grayish green
      case 'fire':
        return '#F08030'; // orange
      case 'water':
        return '#6890F0'; // blue
      case 'electric':
        return '#F8D030'; // yellow
      case 'grass':
        return '#78C850'; // green
      case 'ice':
        return '#98D8D8'; // light blue
      case 'fighting':
        return '#C03028'; // dark red
      case 'poison':
        return '#A040A0'; // purple
      case 'ground':
        return '#E0C068'; // yellowish brown
      case 'flying':
        return '#A890F0'; // purplish blue
      case 'psychic':
        return '#F85888'; // pink
      case 'bug':
        return '#A8B820'; // olive green
      case 'rock':
        return '#B8A038'; // brownish yellow
      case 'ghost':
        return '#705898'; // purple gray
      case 'dragon':
        return '#7038F8'; // dark purple
      case 'dark':
        return '#705848'; // dark grayish brown
      case 'steel':
        return '#B8B8D0'; // light grayish blue
      case 'fairy':
        return '#EE99AC'; // light pink
      default:
        return 'gray'; // default color for unknown types
    }
  }

  search() {
    console.log('Searching for:', this.searchTerm.toLocaleLowerCase());
    this._dataService
      .getPokemon(this.searchTerm.toLocaleLowerCase())
      .subscribe((response: any) => {
        console.log('Search results:', response);
        this.searchResults = response;
      });
  }
}
