import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

import { defaults as defaultControls } from 'ol/control';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  account: Account | null = null;
  authSubscription?: Subscription;
  map: Map | undefined;

  constructor(private accountService: AccountService, private loginModalService: LoginModalService) {}
  ngAfterViewInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [813079.7791264898, 5929220.284081122],
        zoom: 7
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [813079.7791264898, 5929220.284081122, 848966.9639063801, 5936863.986909639]
        })
      ])
    });
  }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
