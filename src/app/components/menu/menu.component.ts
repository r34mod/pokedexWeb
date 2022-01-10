import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayedColumns: string[]=['position','image','name'];
  almacen: any[] = [];
  datasource = new MatTableDataSource<any>(this.almacen);
  pokemons = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    let datos;
    for(let i = 0; i <= 900; i++){
      this.pokemonService.getPokemons(i).subscribe(data => {
        datos = {
          position: i,
          image: data.sprites.front_default,
          name: data.name
        };
        this.almacen.push(datos);
        this.datasource = new MatTableDataSource<any>(this.almacen);
        this.datasource.paginator = this.paginator;
        
      },
      err =>{
        console.log(err);
      });
    }
    
  }


  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if(this.datasource.paginator){
      this.datasource.paginator.firstPage();
    }
  }



  getRow(row:any){
    this.router.navigateByUrl(`pokemon/${row.position}`);
  }

}
