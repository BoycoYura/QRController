import { NgModule } from '@angular/core';
import { QrScanComponent } from './qr-scan/qr-scan';
import { NumberScanComponent } from './number-scan/number-scan';
import { HistoryListComponent } from './history-list/history-list';
import { ProfileComponent } from './profile/profile';
@NgModule({
	declarations: [QrScanComponent,
    NumberScanComponent,
    HistoryListComponent,
    ProfileComponent],
	imports: [],
	exports: [QrScanComponent,
    NumberScanComponent,
    HistoryListComponent,
    ProfileComponent]
})
export class ComponentsModule {}
