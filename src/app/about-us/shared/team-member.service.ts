import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TeamMember } from './team-member.model';
import { team, mentor } from './team';
import 'rxjs/add/observable/of';

@Injectable()
export class TeamMemberService {

  constructor() { }

  public getTeamMembers(): Observable<TeamMember[]> {
    return Observable.of(team);
  }

  public getMentors(): Observable<TeamMember[]> {
    return Observable.of(mentor);
  }

}
