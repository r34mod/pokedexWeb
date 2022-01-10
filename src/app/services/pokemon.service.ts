import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemons(i:any){
    return this.http.get<any>(`${this.url}/pokemon/${i}`);
  }

  getRegions(i: any){
    return this.http.get<any>(`${this.url}/region/${i}`);
  }

  getPokeball(j: any){
    return this.http.get<any>(`${this.url}/item-category/34/${j}`);
  }

  getSpecialPokeball(j: any){
    return this.http.get<any>(`${this.url}/item-category/33/${j}`);
  }

}
