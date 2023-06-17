import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-oryx-footer',
  templateUrl: './oryx-footer.component.html',
  styleUrls: ['./oryx-footer.component.scss']
})
export class OryxFooterComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) { }

  oryxFooter$: Observable<any> | undefined;

  ngOnInit(): void {
    this.oryxFooter$ = this.contentfulService.getAllEntries('oryxFooter');
  }
}
