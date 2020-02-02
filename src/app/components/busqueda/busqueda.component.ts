import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  busqueda:Heroe[];
  termino:string;

  constructor( private _activatedRoute:ActivatedRoute,
               private _heroeService:HeroesService) { }

  ngOnInit() {
      this._activatedRoute.params.subscribe( params => {
        this.termino = params['nombre'];
        this.busqueda = this._heroeService.buscarHeroes(params['nombre']);
        console.log(this.busqueda);
      });
  }

  verHeroe(idx:number){
      
  }

}
