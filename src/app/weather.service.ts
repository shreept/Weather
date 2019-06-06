import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherInfo(city){
    const appId = '0e27fda042b5d92288b467d78b43d679';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city + "&appid="+appId + '&units=imperial';
    return this.http.get(url)
    .pipe(
      tap((data)=>{
        console.log(url,data)
        return data;
      })
    );
  }

}
