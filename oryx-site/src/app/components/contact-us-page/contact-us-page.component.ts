import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) { }

  contactUsPage$: Observable<any> | undefined;

  ngOnInit(): void {
    this.contactUsPage$ = this.contentfulService.getAllEntries('contactUsPage');
  }
}
