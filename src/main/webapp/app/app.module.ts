import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CartelocSharedModule } from 'app/shared/shared.module';
import { CartelocCoreModule } from 'app/core/core.module';
import { CartelocAppRoutingModule } from './app-routing.module';
import { CartelocHomeModule } from './home/home.module';
import { CartelocEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CartelocSharedModule,
    CartelocCoreModule,
    CartelocHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CartelocEntityModule,
    CartelocAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class CartelocAppModule {}
