import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-leaderboard',
  templateUrl: './dashboard-leaderboard.component.html',
  styleUrls: ['./dashboard-leaderboard.component.scss']
})
export class DashboardLeaderboardComponent implements OnInit {

  public tabs = [
    {title: 'Suburb', data: []},
    {title: 'Region', data: []},
    {title: 'National', data: []}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
