import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule,MatHeaderCell,MatFooterCell,MatRowDef} from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatHeaderCell,
    MatFooterCell,
    MatRowDef,
    MatIconButton,
    MatIconModule,
    MatCheckboxModule
    
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
