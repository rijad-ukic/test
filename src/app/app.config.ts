import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
	availableLanguages: Array<{ code: string, name: string }>;
    demoMode: boolean;
}

export const BaseAppConfig: AppConfig = {
    availableLanguages: [{
        code: 'en',
        name: 'English'
    }, {
        code: 'ar',
        name: 'عربى'
    }, {
        code: 'fr',
        name: 'Français'
    }, {
        code: 'es',
        name: 'Española'
    }, {
        code: 'id',
        name: 'Bahasa Indonesia'
    }, {
        code: 'pt',
        name: 'Português'
    }, {
        code: 'tr',
        name: 'Türk'
    }, {
        code: 'it',
        name: 'Italiana'
    }, {
        code: 'sw',
        name: 'Kiswahili'
    }, {
        code: 'de',
        name: 'Deutsch'
    }, {
        code: 'ro',
        name: 'Română'
    }],
    demoMode: false
};
