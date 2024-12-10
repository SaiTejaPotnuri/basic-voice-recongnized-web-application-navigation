import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceWorkerService } from './services/service-worker.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voice-recognization-angular';

  constructor(private translateService: TranslateService,private serviceWorker: ServiceWorkerService,private primengConfig :PrimeNGConfig) {
      this.translateService.setDefaultLang('en');
      this.translateService.use(localStorage.getItem('langInfo') || 'en');
      this.primengConfig.ripple = true;

   }


}
