import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
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
}
