import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ResponsiveService} from "../responsive.service";

export interface Ranking {
  rank: number;
  name: string;
  points: string;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private rankings: Ranking[] = [
    {rank: 1, name: 'John Doe', points: '100'},
    {rank: 2, name: 'Jane Doe', points: '90'},
    {rank: 3, name: 'John Doe', points: '80'},
    {rank: 4, name: 'Jane Doe', points: '70'},
    {rank: 5, name: 'John Doe', points: '60'},
    {rank: 6, name: 'Jane Doe', points: '50'},
    {rank: 7, name: 'John Doe', points: '40'},
    {rank: 8, name: 'Jane Doe', points: '30'},
    {rank: 9, name: 'John Doe', points: '20'},
    {rank: 10, name: 'Jane Doe', points: '10'},
    {rank: 11, name: 'John Doe', points: '0'},
    {rank: 12, name: 'John Doe', points: '0'},
    {rank: 13, name: 'John Doe', points: '0'},
  ]

  public readonly dataSource: MatTableDataSource<Ranking>

  public displayedColumns: string[] = ['rank', 'name', 'points'];

  constructor(public responsiveService: ResponsiveService) {
    this.dataSource = new MatTableDataSource(this.rankings)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
