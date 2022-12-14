import { Injectable } from '@angular/core';
import {Observable, share} from "rxjs";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor(private _breakpointObserver: BreakpointObserver) { }

  public get isHandset(): Observable<BreakpointState> {
    return this._breakpointObserver.observe(Breakpoints.Handset).pipe(
      share()
    );
  }
}
