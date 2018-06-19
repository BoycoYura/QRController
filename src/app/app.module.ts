import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrScanComponent } from '../components/qr-scan/qr-scan';
import { NumberScanComponent } from '../components/number-scan/number-scan';
import { HistoryListComponent } from '../components/history-list/history-list';
import { ProfileComponent} from '../components/profile/profile';
import { NavController } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QrScanComponent,
    NumberScanComponent,
    HistoryListComponent,
    ProfileComponent,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QrScanComponent,
    HomePage,
    NumberScanComponent,
    HistoryListComponent,
    ProfileComponent,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
