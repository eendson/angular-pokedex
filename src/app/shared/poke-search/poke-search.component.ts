import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

@Output() public emmitSearchPokemon = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public search(value:string){
    this.emmitSearchPokemon.emit(value);
  }
}
