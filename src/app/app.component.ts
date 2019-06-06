import { WeatherService } from './weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperature: any;
  cityName: string;
  humidity: any;
  pressure: any;
  constructor(private weatherService: WeatherService){}
// api key for weather app 0e27fda042b5d92288b467d78b43d679


  searchCity(cityName) {
    this.temperature = null;
    this.humidity = null;
    this.pressure = null;
    this.cityName = cityName;
    if (this.cityName) {
      this.weatherService.getWeatherInfo(this.cityName).subscribe(data => {
        console.log(data);
        this.temperature = (<any>data).main.temp;
        this.humidity = (<any>data).main.humidity;
        this.pressure = (<any>data).main.pressure;

     })
  }
}

}