import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent {
  showNavBar: boolean = true;
  showVoiceBotChat: boolean = false;
  selectedLang: string = '';

  constructor(
    private traslateService: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.selectedLang = localStorage.getItem('langInfo') || 'en';
  }
  enableVoiceBotChat() {
    this.showVoiceBotChat = true;
  }

  closeVoiceBotchat() {
    this.showVoiceBotChat = false;
  }

  onChangeLang(event: any) {
    const lang = event.target.value;
    localStorage.setItem('langInfo', lang);
    this.traslateService.use(lang);
    this.languageService.setLang(lang);
  }

  getLang() {
    return this.languageService.getLang();
  }

  getTranslatedText(key: string) {
    const value = this.traslateService.instant(key);
    console.log(value);
    return value != key ? value : this.translateByGoogleApi(key);
  }

  translateByGoogleApi = (key: string) => {
    // const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${this.selectedLang}&dt=t&q=${key}`
    // const res = await (await fetch(url)).json();
    // const data = await res.json();
    // return data[0].map((item: any[]) => item[0]).join("");
    return key;
  };
}
