import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public teams = {};
  constructor(private sportService: SportService, private router: Router) {}

  ngOnInit(): void {
    this.sportService.getTeam().subscribe(result => {
      this.teams = result;
    });
  }

  detailpage(t:string): void{
    let team = {
      name: t['strTeam'],
      est: t['intFormedYear'],
      league: t['strLeague'],
      stadium: t['strStadium'],
      stadiumImg: t['strStadiumThumb'],
      stadiumLoc: t['strStadiumLocation'],
      stadiumDesc: t['strStadiumDescription'],
      description: t['strDescriptionEN'],
      logo: t['strTeamLogo'],
      badge: t['strTeamBadge'],
    }
    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(team)
      }
    };
    this.router.navigate(['/detail'], extras);
  }
  favoritepage(){
    this.router.navigate(['/favorite']);
  }
}