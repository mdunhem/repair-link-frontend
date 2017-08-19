import { Component, OnInit } from '@angular/core';
import { TeamMemberService } from './shared/team-member.service';
import { Observable } from 'rxjs/Observable';
import { TeamMember } from './shared/team-member.model';

@Component({
  selector: 'repair-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  title = 'Our Team';

  teamMembers: Observable<TeamMember[]>;

  mentors: Observable<TeamMember[]>;

  constructor(private teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.teamMembers = this.teamMemberService.getTeamMembers();
    this.mentors = this.teamMemberService.getMentors();
  }

}
