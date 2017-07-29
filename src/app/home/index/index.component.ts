import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'repair-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  title = 'RepairLink';
  subTitle = 'Another test';

  constructor() { }

  ngOnInit() {
  }

}
