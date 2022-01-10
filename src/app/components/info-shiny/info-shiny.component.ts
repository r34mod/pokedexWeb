import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-info-shiny',
  templateUrl: './info-shiny.component.html',
  styleUrls: ['./info-shiny.component.css']
})
export class InfoShinyComponent implements OnInit {

  pokename: any = '';
  poketipo = [];
  poketipeSecond = [];
  pokeimg = '';
  pokeimgShiny = '';
  pokepeso = '';
  pokehabilidad1 = [];
  pokehabilidad2 = [];

  constructor(private pokemon: PokemonService, 
    private _route: ActivatedRoute,
    private router: Router) { 

      this._route.params.subscribe(params => {
        this.getPokemon(params['id']);
      })
    }

  ngOnInit(): void {
  }



  getPokemon(id: any): void {
    localStorage.setItem('idP',id);
    this.pokemon.getPokemons(id).subscribe(data => {
      console.log(data);
      this.pokename = data;
      this.pokeimg = this.pokename.sprites.front_default;
      this.pokeimgShiny = this.pokename.sprites.front_shiny;
      this.poketipo = data.types[0].type.name;
      this.pokehabilidad1 = data.abilities[0].ability.name;
      this.pokehabilidad2 = data.abilities[1].ability.name;
      this.pokepeso = data.weight;
    })
  }

  

  batalla(){
    let id = localStorage.getItem('idP');
    this.router.navigateByUrl(`pokemon/${id}`);

  }


  previous(){
    let row = Number(localStorage.getItem('idP'));
    row = row - 1;
    let id = String(row);
    this.router.navigateByUrl(`pokemonShiny/${id}`);
  }

  next(){
    let row = Number(localStorage.getItem('idP'));
    row = row + 1;
    let id = String(row);
    this.router.navigateByUrl(`pokemonShiny/${id}`);
  }


}
