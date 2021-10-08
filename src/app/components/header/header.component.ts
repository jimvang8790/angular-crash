import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private UiService: UiService) {
    this.subscription = this.UiService.onToggle().subscribe( (value) => (this.showAddTask = value));
   }

  ngOnInit() {
  }

  toggleAddTask() {
    this.UiService.toggleAddTask();
  }

}
