import { Component, OnInit } from '@angular/core';
import { TeamMemberService } from './shared/team-member.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'repair-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  title = 'Our Team';

  teamMembers: Observable<TeamMember[]>;

  constructor(private teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.teamMembers = this.teamMemberService.getTeamMembers();
  }

}
