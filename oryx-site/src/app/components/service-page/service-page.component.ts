import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) { }

  oryxServiceList$: Observable<any> | undefined;

  ngOnInit(): void {
    this.oryxServiceList$ = this.contentfulService.getAllEntries('oryxServiceList');
  }

}
