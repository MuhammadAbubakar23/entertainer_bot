import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ui_ai_bot';
  subMenus: any = [
    {
      "mainId": 710,
      "type": null,
      "name": "Analytics",
      "norm": null,
      "slug": "bot_analytics",
      "link": "bot-analytics",
      "emerging": null,
      "parentId": 706,
      "baseId": 4,
      "typeId": null,
      "isSelected": false,
      "countUser": null,
      "isDisabled": false,
      "icon": "fal fa-message-lines",
      "indexNo": 0,
      "subMenu": null,
      "permission": null,
      "id": 0
    },
    //   {
    //     "mainId": 712,
    //     "type": null,
    //     "name": "Bot KPI's",
    //     "norm": null,
    //     "slug": "bot_kpis",
    //     "link": "bot-kpis",
    //     "emerging": null,
    //     "parentId": 706,
    //     "baseId": 4,
    //     "typeId": null,
    //     "isSelected": false,
    //     "countUser": null,
    //     "isDisabled": false,
    //     "icon": "fa-light fa-calendar pe-2",
    //     "indexNo": 0,
    //     "subMenu": null,
    //     "permission": null,
    //     "id": 0
    // },
    {
      "mainId": 715,
      "type": null,
      "name": "Dashboard",
      "norm": null,
      "slug": "dashboard",
      "link": "ai-dashboard",
      "emerging": null,
      "parentId": 706,
      "baseId": 4,
      "typeId": null,
      "isSelected": false,
      "countUser": null,
      "isDisabled": false,
      "icon": "fa-light fa-chart-line-up pe-2",
      "indexNo": 0,
      "subMenu": null,
      "permission": null,
      "id": 0
    },
    {
      "mainId": 715,
      "type": null,
      "name": "BI Analytics",
      "norm": null,
      "slug": "power-bi",
      "link": "power-bi",
      "emerging": null,
      "parentId": 706,
      "baseId": 4,
      "typeId": null,
      "isSelected": false,
      "countUser": null,
      "isDisabled": false,
      "icon": "fa-light fa-chart-line-up pe-2",
      "indexNo": 0,
      "subMenu": null,
      "permission": null,
      "id": 0
    },
    //     {
    //       "mainId": 713,
    //       "type": null,
    //       "name": "Sentiments",
    //       "norm": null,
    //       "slug": "sentiments",
    //       "link": "sentiments",
    //       "emerging": null,
    //       "parentId": 706,
    //       "baseId": 4,
    //       "typeId": null,
    //       "isSelected": false,
    //       "countUser": null,
    //       "isDisabled": false,
    //       "icon": "fa-light fa-eye-slash pe-2",
    //       "indexNo": 0,
    //       "subMenu": null,
    //       "permission": null,
    //       "id": 0
    //   },
    //   {
    //     "mainId": 714,
    //     "type": null,
    //     "name": "Tokens",
    //     "norm": null,
    //     "slug": "tokens",
    //     "link": "tokens",
    //     "emerging": null,
    //     "parentId": 706,
    //     "baseId": 4,
    //     "typeId": null,
    //     "isSelected": false,
    //     "countUser": null,
    //     "isDisabled": false,
    //     "icon": "fa-light fa-upload pe-2",
    //     "indexNo": 0,
    //     "subMenu": null,
    //     "permission": null,
    //     "id": 0
    // }
  ]
  constructor() {
    localStorage.setItem("current_path", location.origin)
    localStorage.setItem('analyticsSubMenus', JSON.stringify(this.subMenus));
    localStorage.setItem("filterDays", "1");
    localStorage.setItem("timeSpan", "day");
  }

}
