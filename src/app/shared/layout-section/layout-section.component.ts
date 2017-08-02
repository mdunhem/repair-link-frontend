import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'repair-layout-section',
  templateUrl: './layout-section.component.html',
  styleUrls: ['./layout-section.component.scss']
})
export class LayoutSectionComponent implements OnInit {

  @Input() fluid: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
