import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ExpandedConsoleComponent } from 'src/app/sidenav-expanded/expanded-console/expanded-console.component';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/services/sidenav.service';
import { Router } from '@angular/router';
import { ExpandedAnalyticsComponent } from 'src/app/sidenav-expanded/expanded-analytics/expanded-analytics.component';
import { ExpandedBotConversationComponent } from 'src/app/sidenav-expanded/expanded-bot-conversation/expanded-bot-conversation.component';
import { ExpandedChatHistoryComponent } from 'src/app/sidenav-expanded/expanded-chat-history/expanded-chat-history.component';
import { ExpandedHumanInteractionsComponent } from 'src/app/sidenav-expanded/expanded-human-interactions/expanded-human-interactions.component';
import { ConversationlBotService } from './console/services/conversationl-bot.service';
import { ExpandedHumanAgentTakeoverComponent } from 'src/app/sidenav-expanded/expanded-human-agent-takeover/expanded-human-agent-takeover.component';
import { bot_id, workspace_id, chat_path, bot_name } from 'src/main';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public subscription!: Subscription;

  @ViewChild('container', { read: ViewContainerRef }) target: ViewContainerRef | undefined;
  componentName: string = 'Analytics';

  constructor(
    private resolver: ComponentFactoryResolver,
    private sidenavService: SidenavService,
    private router: Router,
    private _bS: ConversationlBotService
  ) {
    this.updateSidenav();
  }

  updateSidenav() {
    const urlSegments = this.router.url.split('/');
    let moduleSegment = urlSegments[2];
    console.log("Sidenav", moduleSegment)
    switch (moduleSegment) {
      case 'ai-bot':
        moduleSegment = 'Bot Interactions'
        break;
      case 'human-agent-takeover':
        moduleSegment = 'Human Agent Takeover'
        break;
      case 'chat-history':
        moduleSegment = 'Chat History'
        break;
      case 'human-interactions':
        moduleSegment = 'Human Interactions'
        break;
      case 'analytics':
        moduleSegment = 'Analytics'
        break;
      case 'console':
        moduleSegment = 'Console'
        break;
    }
    this.sidenavService.updateMessage(moduleSegment);
  }

  ngOnInit(): void {
    this.setToken();
    this.sidenavService.getMessage.subscribe((msg: string) => {
      this.componentName = msg;
      this.target?.clear();
      this.loadComponent(this.componentName);
    });
  }

  setToken() {
    this._bS.getToken(workspace_id).subscribe((res: any) => {
      localStorage.setItem("token", res.token);
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadComponent(this.componentName);
    })
  }

  loadComponent(leftSideName: string): void {
    let componentFactory = null;
    switch (leftSideName) {
      // case 'Bot Interactions':
      //   componentFactory = this.resolver.resolveComponentFactory(ExpandedAiBotComponent);
      //   this.target?.createComponent(componentFactory);
      //   break;
      case 'Analytics':
        componentFactory = this.resolver.resolveComponentFactory(ExpandedAnalyticsComponent);
        this.target?.createComponent(componentFactory);
        break;
      case 'Console':
        componentFactory = this.resolver.resolveComponentFactory(ExpandedConsoleComponent);
        this.target?.createComponent(componentFactory);
        break;
      case 'Bot Interactions':
        componentFactory = this.resolver.resolveComponentFactory(ExpandedBotConversationComponent);
        this.target?.createComponent(componentFactory);
        break;
      case 'Human Agent Takeover':
        componentFactory = this.resolver.resolveComponentFactory(ExpandedHumanAgentTakeoverComponent);
        this.target?.createComponent(componentFactory);
        break;
      case 'Live Bot Interactions':
        componentFactory = this.resolver.resolveComponentFactory(ExpandedBotConversationComponent);
        this.target?.createComponent(componentFactory);
        break;
      case 'Human Interactions':
        componentFactory = this.resolver.resolveComponentFactory(ExpandedHumanInteractionsComponent);
        this.target?.createComponent(componentFactory);
        break;
      case 'Chat History':
        componentFactory = this.resolver.resolveComponentFactory(ExpandedChatHistoryComponent);
        this.target?.createComponent(componentFactory);
        break;
      default:
        componentFactory = this.resolver.resolveComponentFactory(ExpandedAnalyticsComponent);
        this.target?.createComponent(componentFactory);
        break;

    }
    // if (componentFactory && this.target) {

    // }

  }
}
