import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selectedLang: string = '';

  constructor() {
    this.selectedLang = localStorage.getItem('langInfo') || 'en';
  }
  ngOnInit() {
    this.selectedLang = localStorage.getItem('langInfo') || 'en';
  }

  setLang(lang: string) {
    this.selectedLang = lang;
    localStorage.setItem('langInfo', lang);
  }
  getLang() {
    return this.selectedLang;
  }
}
