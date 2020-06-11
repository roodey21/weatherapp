import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
	url		=	'https://api.openweathermap.org/data/2.5/';
	key		=	'15e6399d6eb26543b09a73981f72cca0';
	city	=	'sleman';

	constructor(private http: HttpClient) { }

	getData(){
		return this.http.get('${this.url}weather?q=${this.city}&appid=${this.key}&units=metric');
		
	}
}
