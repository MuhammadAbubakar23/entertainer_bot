import { Component } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { Location } from "@angular/common";
import { HeaderService } from 'src/app/services/header.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';
import { BotMonitoringService } from 'src/app/main/main/ai-bot/bot-monitoring.service';
// import { ChatVisibilityService } from 'src/app/services/chat-visibility.service';
import { ChatVisibiltyHumanInteractionService } from 'src/app/services/chat-visibilty-human-interaction.service';
import { InitialsService } from 'src/app/services/initials.service';
import { bot_id, workspace_id, chat_path, bot_name } from 'src/main';
declare var toggleNavPanel: any;
@Component({
  selector: 'app-expanded-human-interactions',
  templateUrl: './expanded-human-interactions.component.html',
  styleUrls: ['./expanded-human-interactions.component.scss']
})
export class ExpandedHumanInteractionsComponent {
  //   constructor(private sidenavService:SidenavService, private location: Location){

  //   }
  //   updateSidenav(){
  //     this.sidenavService.updateMessage("AI Bot")
  //   }
  // }

  // menuItems: any[] = [];
  //   subMenus = [
  //     {
  //       "DisplayName": " Chat BOT ",
  //       "RouteName": "/bot-monitoring/chat-bot",
  //       "Icon": "",
  //       "isChild": false,
  //       "Children": [

  //         {
  //           "DisplayName": "Component",
  //           "RouteName": "/bot-monitoring/chat-bot/components"
  //         },

  //       ]
  //     }
  //   ];

  activeIndex = 0;
  isActive = false;
  searchText: any = '';

  activechatBotHistory: any = [];
  defaultchatBotHistory: any = [];
  completedConversation: any[] = [];
  showBotMonitoringContent: boolean = false;
  interval: any;
  workspace_id = workspace_id;
  bot_id = bot_id;
  constructor(private chatVisibilityService: ChatVisibiltyHumanInteractionService, public InitialsService: InitialsService,
    private headerService: HeaderService, private _botService: BotMonitoringService,
    private _route: Router, private _sharedS: SharedService
    , private _spinner: NgxSpinnerService, private sidenavService: SidenavService, private location: Location) {
    console.log("Bot History Menu ")

  }

  ngOnInit(): void {
    // 
    // this.chatVisibilityService.refreshHistoryArray
    this.getChatBotHistory();
    this.chatVisibilityService.thirdActiveHistory$.subscribe((obj: any) => {
      if (obj) {
        const index = this.activechatBotHistory.findIndex((item: any) => item.session_id === obj.session_id)
        if (index != -1) {
          this.activechatBotHistory[index]['active'] = obj.active;
          const openChats = this.activechatBotHistory.filter((item: any) => item.active === true);
          if (openChats.length > 0) {
            localStorage.setItem('activeChatsHumanInteractions', JSON.stringify(openChats));
          }
          else {

            localStorage.removeItem('activeChatsHumanInteractions');
          }

        }
      }
    })

    this.interval = setInterval(() => {
      this.getChatBotHistoryonRefresh();
    }, 5000)
  }
  // updatevalue(string: any) {

  //   if (string === 'generative-bot-history') {
  //     this.showBotMonitoringContent = true;
  //   }
  //   else if (string === "bot-monitoring-chat") {
  //     this._route.navigateByUrl('/bot-monitoring/bot-monitoring-chat');
  //   }
  //   else {
  //     this.showBotMonitoringContent = false;
  //     this.headerService.updateMessage(string);
  //   }
  // }
  // activeMenu(index: any) {
  //   this.activeIndex = index;
  //   this.isActive = true;
  //   this.updatevalue('component')
  // }

  filterResults() {
    if (!this.searchText) {
      this.activechatBotHistory = this.defaultchatBotHistory.slice();
      return;
    }
    this.activechatBotHistory = this.defaultchatBotHistory.filter((item: any) => item?.session_id.toLowerCase().includes(this.searchText.toLowerCase()) || item?.last_message.toLowerCase().includes(this.searchText.toLowerCase()) || item?.username?.toLowerCase().includes(this.searchText.toLowerCase()));
  }


  toggleChatVisibility(clickedItem: any) {
    // this.activechatBotHistory.find((a:any)=>a.session_id === clickedItem.session_id).active = !clickedItem.active;
    // clickedItem.active = !clickedItem.active;
    this.chatVisibilityService.notifyNewChatIdHistory(clickedItem);
  }
  // resetMenu() {
  //   this._botSubMenuStatus.setActiveMenu(false);
  //   this.updatevalue('chat')
  // }
  // updateSidenav(){
  //       this.sidenavService.updateMessage("Bot Interactions")
  //     }
  goBack() {
    this._sharedS.setShowGenerativeMenu('');
  }
  getChatBotHistory() {
    this._spinner.show('chat-history-menu1');
    const formData = { bot_id: this.bot_id, workspace_id: this.workspace_id }
    this._botService.chatBotHistoryForHumanInteraction(formData).subscribe((res: any) => {
      // res.slugs.forEach((item: any, index: any) => {
      //   item.name = "Unknown" + `${index + 1}`
      //   item['active'] = false;
      // })
      if (res.detail.length > 0) {
        this._spinner.hide('chat-history-menu1');
        res.detail.forEach((item: any, index: any) => {
          item['active'] = false;
        })
        //this.activechatBotHistory = res.detail;
        this.defaultchatBotHistory = res.detail;
        this.activechatBotHistory = this.defaultchatBotHistory.slice();
      }
    },
      (error: any) => {
        this._spinner.hide('chat-history-menu1');
        //alert('Service unavailable');
      })
  }


  getChatBotHistoryonRefresh() {
    //this._spinner.show('chat-history-menu1');
    const formData = { bot_id: this.bot_id, workspace_id: this.workspace_id }
    this._botService.chatBotHistoryForHumanInteraction(formData).subscribe((res: any) => {
      // res.slugs.forEach((item: any, index: any) => {
      //   item.name = "Unknown" + `${index + 1}`
      //   item['active'] = false;
      // })
      if (res.detail.length > 0) {
        //this._spinner.hide('chat-history-menu1');
        this.defaultchatBotHistory = res.detail;
        this.activechatBotHistory = this.defaultchatBotHistory.slice();
      }
      this.chatVisibilityService.refreshHistoryArray.forEach((session_id) => {
        this.activechatBotHistory.forEach((item: any) => {
          if (item.session_id == session_id) {
            item.active = true;
          }
        })
      })
    },
      (error: any) => {
        //alert('Service unavailable');
      })

    const openChats = this.activechatBotHistory.filter((item: any) => item.active === true);
    if (openChats.length > 0) {
      localStorage.setItem('activeChatsHumanInteractions', JSON.stringify(openChats));
    }
    else {

      localStorage.removeItem('activeChatsHumanInteractions');
    }


  }

  toggle() {
    ;
  }

  toggleNavTest() {
    toggleNavPanel();
  }
  ngOnDestroy() {
    this.chatVisibilityService.refreshHistoryArray = []
    clearInterval(this.interval);
  }
}
