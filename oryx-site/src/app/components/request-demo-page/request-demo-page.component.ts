import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-request-demo-page',
  templateUrl: './request-demo-page.component.html',
  styleUrls: ['./request-demo-page.component.scss']
})
export class RequestDemoPageComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) { }

  requestDemo$: Observable<any> | undefined;

  ngOnInit(): void {
    this.requestDemo$ = this.contentfulService.getAllEntries('requestDemo');
  }

  formFields = [
    {id:'name', type:'text', index:0},
    {id:'email', type:'email', index:1},
    {id:'phone', type:'tel', index:2},
    {id:'company', type:'text', index:3}
  ]
}
