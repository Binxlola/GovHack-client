import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeaderboardComponent } from './dashboard-leaderboard.component';

describe('DashboardLeaderboardComponent', () => {
  let component: DashboardLeaderboardComponent;
  let fixture: ComponentFixture<DashboardLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
