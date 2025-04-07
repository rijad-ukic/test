import { Component, Inject } from '@angular/core';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/contants.models';
import { MyEvent } from 'src/services/myevent.services';
import { APP_CONFIG, AppConfig } from './app.config';
import { VtPopupPage } from './vt-popup/vt-popup.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rtlSide = "left";

  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform,
    private navCtrl: NavController,
    private route: Router,
    private modalController: ModalController,
    private translate: TranslateService,
    private myEvent: MyEvent
  ) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

  initializeApp() {
    this.platform.ready().then(async () => {

      if (
        this.config.demoMode &&
        (this.platform.is('hybrid') || this.platform.is('capacitor')) &&
        !window.localStorage.getItem(Constants.KEY_IS_DEMO_MODE)
      ) {
        window.localStorage.setItem(Constants.KEY_IS_DEMO_MODE, 'true');
        this.change_language();
        setTimeout(() => this.presentModal(), 30000);
      } else {
        this.navCtrl.navigateRoot(['./']);
      }

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority?.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority?.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    this.rtlSide = lang === 'ar' ? 'rtl' : 'ltr';
  }

  change_language() {
    this.route.navigate(['./select-language']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }
}
