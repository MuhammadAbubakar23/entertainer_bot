import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { AnalyticsService } from '../../../service/analytics.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.scss']
})
export class PowerBiComponent {
  constructor(private _hS: HeaderService, private _analytics: AnalyticsService, private spinnerServerice: NgxSpinnerService) {
    _hS.updateHeaderData({
      title: 'BI Analytics',
      tabs: [{ title: '', url: '', isActive: true }],
      isTab: false,
      class: "fa-light fa-chart-line-up"
    })
  }
}
