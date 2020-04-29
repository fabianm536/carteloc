import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CartelocSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CartelocSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class CartelocHomeModule {}
