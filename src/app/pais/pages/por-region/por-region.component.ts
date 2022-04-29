import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva:string = "";
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  getClaseeCSS(region:string){
    return (region === this.regionActiva ) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion(region: string){
    if(this.regionActiva == region) return;
    
    this.regionActiva = region;
    this.buscar();
  }

  buscar(){

    this.hayError= false;
    this.paisService.buscarRegion(this.regionActiva.toLowerCase()).subscribe(
      (paises)=>{
        this.paises = paises;
      },
      (err)=>{
        this.paises= []
        this.hayError= true;
      }
    );
  }

}