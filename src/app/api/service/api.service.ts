import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tiempo, Datum } from '../interface/api-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl2: string = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Buenos+Aires,Argentina&key=a3fb5b06feba4822a2fcc623eb9b2c1b&days=7'

  private apiUrl: string = 'https://api.weatherbit.io/v2.0/';
  private apiKey: string = environment.api_key
  private busqueda: string = 'forecast/daily?city=Buenos+Aires,Argentina'
  

  

  constructor( private http: HttpClient ) { 

    
  }

      tiempo() {

          return this.http.get<Tiempo[]>('https://api.weatherbit.io/v2.0/forecast/daily?city=Buenos+Aires,Argentina&key=a3fb5b06feba4822a2fcc623eb9b2c1b&days=7')
            
            // .pipe(
            //   tap( resp => resp )
            // )
            
 

}
}
