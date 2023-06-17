import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss']
})
export class NavBarMobileComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) { }

  oryxContacts$: Observable<any> | undefined;

  ngOnInit(): void {
    this.oryxContacts$ = this.contentfulService.getAllEntries('oryxContacts');
  }

  navItems: { name: string, route: string }[] = [
    {name: 'Home', route: '/home'},
    {name: 'About Us', route: '/about-us'},
    {name: 'Services', route: '/services'},
    {name: 'Demo', route: '/request-demo'},
    {name: 'Contact Us', route: '/contact-us'},
  ]

  isNavbarOpen: boolean = false;
  toggleNavbar() { this.isNavbarOpen = !this.isNavbarOpen; }
}
