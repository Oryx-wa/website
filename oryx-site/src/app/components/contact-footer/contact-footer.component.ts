import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.scss']
})
export class ContactFooterComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) { }

  oryxContacts$: Observable<any> | undefined;

  ngOnInit(): void {
    this.oryxContacts$ = this.contentfulService.getAllEntries('oryxContacts');
  }
}
