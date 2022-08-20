import { Component } from '@angular/core';
import {ResponsiveService} from "./responsive.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GovHack-client';

  constructor(public responsiveService: ResponsiveService) { }
}
