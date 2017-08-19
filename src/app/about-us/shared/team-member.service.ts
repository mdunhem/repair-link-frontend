import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { team } from './team';

@Injectable()
export class TeamMemberService {

  constructor() { }

  public getTeamMembers(): Observable<TeamMember[]> {
    return Observable.of(team);
  }

}
