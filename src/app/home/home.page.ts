import { Component } from '@angular/core';
import { FlutterService } from '../core/flutter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private flutterService: FlutterService
  ) { }

  openFlutter() {
    this.flutterService.open();
  }

}
