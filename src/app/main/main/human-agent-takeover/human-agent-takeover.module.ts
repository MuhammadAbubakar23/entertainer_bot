import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotHistoryComponent } from './components/bot-monitoring/chat-bot-history/chat-bot-history.component';
import { HumanAgentTakeoverRoutingModule } from './human-agent-takeover-routing.module';
import { BotMonitoringComponent } from './components/bot-monitoring/bot-monitoring.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BotMonitoringComponent],
  imports: [
    CommonModule,
    HumanAgentTakeoverRoutingModule,
    ChatBotHistoryComponent,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class HumanAgentTakeoverModule { }
