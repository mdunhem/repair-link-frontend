import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'repair-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public projectTitle = environment.projectTitle;
  public copyrightYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
