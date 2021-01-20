import { Component, OnInit, Input } from '@angular/core';
import { FlutterService } from '../core/flutter.service';
import { Message } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: Message;

  constructor(
    public flutterService: FlutterService
  ) { }

  ngOnInit() { }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  view() {
    this.flutterService.open();
  }
}
