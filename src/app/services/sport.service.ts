import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SportService {
  url       =   'https://www.thesportsdb.com/api/v1/json/1/';
  idLeague  =   '4387';

  constructor(private http: HttpClient) { }

  getData(){
		return this.http.get(`${this.url}lookupleague.php?id=${this.idLeague}`);
  }
  
  getTeam(){
		return this.http.get(`${this.url}lookup_all_teams.php?id=${this.idLeague}`);
  }

  getNext(){
		return this.http.get(`${this.url}eventsnextleague.php?id=${this.idLeague}`);
  }

  getPast(){
		return this.http.get(`${this.url}eventspastleague.php?id=${this.idLeague}`);
  }
}
