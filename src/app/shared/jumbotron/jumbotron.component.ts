import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'repair-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input() title: String;
  @Input() subTitle: String;

  @Input() feature: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
