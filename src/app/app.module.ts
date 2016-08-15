import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppComponent }         from './app.component';
import { routing,
         appRoutingProviders }  from './app.routing';

// import { HeroListComponent }    from './hero-list.component';
import { EditorComponent }  from './editor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    // HeroListComponent,
    EditorComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
