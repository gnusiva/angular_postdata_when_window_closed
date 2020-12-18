import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = '';
  api_url = 'http://localhost:3000/captureClose';

  @HostListener('window:pagehide', ['$event'])
  pageHideHandler(event) {
    const formData = new FormData();
    formData.append('sentData', this.data);
    navigator.sendBeacon( 
      this.api_url,
      formData // Data optional 
    );
  }



}
