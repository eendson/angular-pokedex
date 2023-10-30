import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private pokeApiService: PokeApiService
    ){}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const detailPokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const detailName = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([detailPokemon, detailName]).subscribe(
        res=>{
          this.pokemon = res;
          this.isLoading = true;
    },    
    error=>{
      this.apiError = true
    });

  }
}
