import { Component, OnInit } from '@angular/core';
import { LogService }from './services/log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wonderolieshop for all your wonderolie';
  private jsonData;

  constructor(private logService: LogService) {}

  async ngOnInit() {
  }
}
