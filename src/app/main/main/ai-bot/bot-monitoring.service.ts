import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { bot_id, workspace_id, chat_path, bot_name } from 'src/main';
@Injectable({
  providedIn: 'root'
})
export class BotMonitoringService {
  chatBotBaseUrl = environment.chatBotBaseUrl
  constructor(private http: HttpClient) { }
  ChatWdidget(form: any) {
    return this.http.post(this.chatBotBaseUrl + "/chat", form);
  }
  chatInit() {
    return this.http.get(this.chatBotBaseUrl + "/init");
  }
  chatBotHistory(obj: any) {
    const formData = new FormData();
    formData.append('bot_id', obj.bot_id);
    formData.append('workspace_id', obj.workspace_id);
    return this.http.post(this.chatBotBaseUrl + "chats/active/get_all/bot", formData);
  }

  ChatBotWdidget(form: any) {
    const formData = new FormData();
    formData.append('bot_id', form.bot_id);
    formData.append('workspace_id', form.workspace_id);
    formData.append('text', form.text);
    formData.append('session_id', form.session_id);
    formData.append('token', form.token)
    // return this.http.post(this.chatBotBaseUrl + "chats/batch", formData).pipe(timeout(120 * 1000));
    return this.http.post(this.chatBotBaseUrl + chat_path, formData).pipe(timeout(120 * 1000));
  }
  menuChatBotWdidget(form: any) {
    const formData = new FormData();
    formData.append('bot_id', form.bot_id);
    formData.append('workspace_id', workspace_id);
    formData.append('text', form.text);
    formData.append('session_id', form.session_id);
    formData.append('token', form.token)
    // return this.http.post(this.chatBotBaseUrl + "chats/batch", formData).pipe(timeout(120 * 1000));
    return this.http.post(this.chatBotBaseUrl + "rasa/batch", formData).pipe(timeout(120 * 1000));
  }

  ProfileCreate(form: any) {
    const formData = new FormData();
    formData.append('token', form.token)
    formData.append('username', form.username)
    formData.append('email', form.email)
    return this.http.post(this.chatBotBaseUrl + "profiles/create", formData);
  }
  ProfileCreateMenu(form: any) {
    const formData = new FormData();
    formData.append('token', form.token);
    formData.append('username', form.username)
    formData.append('email', form.email)
    return this.http.post(this.chatBotBaseUrl + "profiles/create", formData);
  }
  getToken() {
    return this.http.get(`http://3.135.171.70:5000/tokens/get?bot_id=${bot_id}&workspace_id=${workspace_id}`);
  }
  //http://3.135.171.70:5000/tokens/get?bot_id=2&workspace_id=2
  ChatHumanWdidget(form: any) {
    const formData = new FormData();
    formData.append('bot_id', form.bot_id);
    formData.append('workspace_id', form.workspace_id);
    formData.append('text', form.text);
    formData.append('session_id', form.session_id);
    formData.append('token', form.token)
    formData.append('agent_name', form.agent_name)
    return this.http.post(this.chatBotBaseUrl + "chats/human_agent", formData).pipe(timeout(120 * 1000));
  }
  ChatHistory(form: any) {
    const formData = new FormData();
    formData.append('bot_id', form.bot_id);
    formData.append('workspace_id', form.workspace_id);
    formData.append('session_id', form.session_id);
    return this.http.post(this.chatBotBaseUrl + "chats/get", formData);
  }
  ChatHistoryMenu(form: any) {
    const formData = new FormData();
    formData.append('bot_id', bot_id);
    formData.append('workspace_id', workspace_id);
    formData.append('session_id', form.session_id);
    return this.http.post(this.chatBotBaseUrl + "chats/get", formData);
  }
  chatBotHistoryForChatHistoryModule(obj: any) {
    const formData = new FormData();
    formData.append('bot_id', obj.bot_id);
    formData.append('workspace_id', obj.workspace_id);
    return this.http.post(this.chatBotBaseUrl + "chats/inactive/get_all", formData);
  }

  chatBotHistoryForHumanInteraction(obj: any) {
    const formData = new FormData();
    formData.append('bot_id', obj.bot_id);
    formData.append('workspace_id', obj.workspace_id);
    return this.http.post(this.chatBotBaseUrl + "chats/active/get_all/transfer", formData);
  }

  chatBotHistoryForAgentTakeover(obj: any) {
    const formData = new FormData();
    formData.append('bot_id', obj.bot_id);
    formData.append('workspace_id', obj.workspace_id);
    return this.http.post(this.chatBotBaseUrl + "chats/active/get_all/takeover", formData);
  }

  csatCreate(body: any) {
    const formData = new FormData();
    formData.append("token", body.token)
    formData.append("session_id", body.session_id)
    formData.append("score", body.score)
    formData.append("email", body.email)

    return this.http.post(this.chatBotBaseUrl + "csat/create", formData)
  }
}
