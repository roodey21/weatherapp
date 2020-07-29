import { Component, OnInit } from '@angular/core';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  // public next = {};
  public last = {};

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    // this.sportService.getNext().subscribe(result  => {
    //   this.next = result;
    // });
    this.sportService.getPast().subscribe(result  => {
      this.last = result;
    });
  }

}