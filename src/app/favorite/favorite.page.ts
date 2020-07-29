import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage{
  
  public fav;
  constructor() { 
    this.fav = JSON.parse(localStorage.getItem('fav'));
        console.log(this.fav);
    }
}