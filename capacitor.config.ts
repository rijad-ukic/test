import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'zablistaj-customer',
  webDir: 'www',
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      'android-minSdkVersion': '19',
      'android-targetSdkVersion': '30',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      ShowSplashScreenSpinner: 'false',
      FadeSplashScreen: 'false',
      AutoHideSplashScreen: 'false',
      orientation: 'portrait',
      AndroidPersistentFileLocation: 'Compatibility'
    }
  }
};

export default config;
