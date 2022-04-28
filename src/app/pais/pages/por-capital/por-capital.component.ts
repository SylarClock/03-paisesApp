import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  paises: Country[] = [];
  hayError: boolean = false;
  termino:string = "";

  constructor(private paisService:PaisService) { }
  
  buscar(termino:any){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe((paises)=>{
        this.paises = paises;
      }, (err)=>{
        this.hayError = true;
        this.paises = [];
      }
    );
  }
  sugerencias(termino:any){
    this.hayError = false;
  }


}
