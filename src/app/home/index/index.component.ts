import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'repair-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  title = 'RepairLink';
  subTitle = 'CS 411 Green Team';

  constructor() { }

  ngOnInit() {
  }

}
