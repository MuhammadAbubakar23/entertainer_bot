import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ChatWidget2Component } from './components/chat-widget2/chat-widget2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { NgToggleModule } from 'ng-toggle-button';
import { MenuChatWidgetComponent } from './components/menu-chat-widget/menu-chat-widget.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    ChatWidget2Component,
    MenuChatWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleRoutingModule,
    MarkdownModule,
    NgToggleModule
  ],
  exports: [
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    ChatWidget2Component,
    MarkdownModule,
    MenuChatWidgetComponent
    ]
})
export class SharedModuleModule { }
