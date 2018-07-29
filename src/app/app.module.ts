import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { AppRoutingModule } from './app-routing.module';
import { BottomSheetOverviewExampleSheetComponent } from './components/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    BottomSheetOverviewExampleSheetComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetOverviewExampleSheetComponent]
})
export class AppModule { }
