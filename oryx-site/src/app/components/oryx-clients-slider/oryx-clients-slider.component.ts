import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-oryx-clients-slider',
  templateUrl: './oryx-clients-slider.component.html',
  styleUrls: ['./oryx-clients-slider.component.scss']
})
export class OryxClientsSliderComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  oryxClientList$: Observable<any> | undefined;

  ngOnInit(): void {
    this.oryxClientList$ = this.contentfulService.getAllEntries('oryxClientList');
  }

  @ViewChild('slider') sliderRef!: ElementRef;

  scrollDistance: number = 200;

  scrollLeft() {
    this.sliderRef.nativeElement.scrollTo({
      left: this.sliderRef.nativeElement.scrollLeft - this.scrollDistance,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.sliderRef.nativeElement.scrollTo({
      left: this.sliderRef.nativeElement.scrollLeft + this.scrollDistance,
      behavior: 'smooth'
    });
  }
}
