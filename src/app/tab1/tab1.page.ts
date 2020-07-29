import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public sport = {};
  public next = {};
  public last = {};

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.sportService.getData().subscribe(result  => {
      this.sport = result;
    });
    this.sportService.getNext().subscribe(result  => {
      this.next = result;
    });
    this.sportService.getPast().subscribe(result  => {
      this.last = result;
    });
  }

}