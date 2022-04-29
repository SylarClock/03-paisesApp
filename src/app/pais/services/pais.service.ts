import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  

  private apiUrl:string = 'https://restcountries.com/v3.1';
  private apiUrlV2:string = 'https://restcountries.com/v2';

  constructor(private http:HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;
    console.log(url);
    
    return this.http.get<Country[]>( url );
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    console.log(url);
    
    return this.http.get<Country[]>( url );
  }

  getPaisPorId(id:string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    
    return this.http.get<Country>( url );
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrlV2}/regionalbloc/${region}`;
    console.log(url);
    
    return this.http.get<Country[]>( url );
  }


}
