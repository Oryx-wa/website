import { Component } from '@angular/core';

@Component({
  selector: 'app-email-pop-up',
  templateUrl: './email-pop-up.component.html',
  styleUrls: ['./email-pop-up.component.scss']
})
export class EmailPopUpComponent {
  isPopUpVisible = true;

  closeContainer() {
    this.isPopUpVisible = false;
  }
}
