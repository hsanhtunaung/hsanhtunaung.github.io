import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PlayersModule } from './Players/player.module';
import { ListsComponent } from "./Players/lists/lists.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent, 
   FetchDataComponent
    , ListsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    MatPaginatorModule,
       MatTableModule,
      HttpClientModule,
    FormsModule,
    PlayersModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },   
      { path: 'fetch-data', component: FetchDataComponent },    
      { path: 'lists', component: ListsComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
