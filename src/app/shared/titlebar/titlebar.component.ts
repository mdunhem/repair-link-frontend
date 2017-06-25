import { Component, OnInit, Input } from '@angular/core';

export interface Breadcrumb {
  title: string;
  link?: string;
}

@Component({
  selector: 'repair-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  @Input() title: string;
  @Input() breadcrumbs: Array<Breadcrumb>;

  constructor() { }

  ngOnInit() {
  }

}
