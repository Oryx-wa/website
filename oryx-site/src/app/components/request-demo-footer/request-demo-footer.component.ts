import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-demo-footer',
  templateUrl: './request-demo-footer.component.html',
  styleUrls: ['./request-demo-footer.component.scss']
})
export class RequestDemoFooterComponent {
  constructor(private router: Router) { }

  redirectToRequestDemo() {
    this.router.navigate(['/request-demo']);
  }
}
