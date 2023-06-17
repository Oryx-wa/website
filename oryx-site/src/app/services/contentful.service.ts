import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from, Observable } from 'rxjs';

import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor(public loadingService: LoadingService) { }

  private client = createClient({
    space: 'pntywuu2cdre',
    accessToken: 'Ra0OewZgtirLnxIFP_PBrTYN8NDluGhaJLD4AAH7b-g'
  });

  getAllEntries(contentType: string) {
    this.loadingService.startLoading();

    const promise = this.client.getEntries({
      content_type: contentType,
    });

    const entries$ = from(promise);
    entries$.subscribe({
      complete: () => this.loadingService.stopLoading(),
    });

    return entries$;
  }

  getEntryById(entryId: string): Observable<Entry<any>> {
    this.loadingService.startLoading();

    const promise = this.client.getEntry(entryId);

    const entry$ = from(promise);
    entry$.subscribe({
      complete: () => this.loadingService.stopLoading(),
    });

    return entry$;
  }
}
