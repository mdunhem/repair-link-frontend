import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';

import { NavItems } from '../nav-items';
import { AuthService } from '../../secure/auth/auth.service';

@Component({
  selector: 'repair-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title = 'RepairLink';
  @Input() navItems: NavItems;

  @Input() isDark = false;

  @Input() hasSearchBox = false;

  @Input() hasShadow = true;

  @Output() searchTerm = new EventEmitter();

  @ViewChild('menu') menu: ElementRef;

  public searchField = '';

  constructor(private element: ElementRef, private authService: AuthService) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.searchField);
    this.searchTerm.emit(this.searchField);
  }

  public toggleMenu() {
    this.menu.nativeElement.classList.toggle('show');
  }

  public canActivate(roles: string[] = []): boolean {
    return this.authService.hasRoles(roles);
  }

}
