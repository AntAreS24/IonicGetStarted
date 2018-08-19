import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private firebase: Firebase) {
    platform.ready().then(() => {
      this.firebase.grantPermission();

      this.firebase.getToken()
        .then(token => console.log(`The Firebase token is ${token}`)) // save the token server-side and use it to push notifications to this device
        .catch(error => console.error('Error getting Firebase token', error));

      this.firebase.onTokenRefresh()
        .subscribe((token: string) => console.log(`Got a new Firebase token ${token}`));

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
