import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private contentfulService: ContentfulService, private router: Router) { }

  oryxHomePage$: Observable<any> | undefined;
  oryxPartnerList$: Observable<any> | undefined;

  ngOnInit(): void {
    this.oryxHomePage$ = this.contentfulService.getAllEntries('homePage');
    this.oryxPartnerList$ = this.contentfulService.getAllEntries('oryxPartnerList');
  }

  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }

  redirectToYouTube(url: string) {
    window.open(url, '_blank');
  }
}
