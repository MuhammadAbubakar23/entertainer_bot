// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';
// import { webSocket } from 'rxjs/webSocket';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebsocketService {
//   private socket: WebSocket;
//   private messageSubject: BehaviorSubject<any> = new BehaviorSubject(null);
//   private messageQueue: string[] = [];
//   constructor() {
//     this.socket = new WebSocket('ws://3.135.171.70:5000/analytics/ws');
//     this.socket.onopen = () => {
//       console.log('WebSocket connection established');
//       this.messageQueue.forEach(message => {
//         debugger
//         this.send(message)
//       });
//       this.messageQueue = []; 
//     };

//     this.socket.onmessage = (event) => {
//       debugger
//       const data = JSON.parse(event.data);
//       this.messageSubject.next(data);
//     };

//     this.socket.onclose = () => {
//       debugger
//       console.log('WebSocket connection closed');
//     };

//     this.socket.onerror = (error) => {
//       debugger
//       console.error('WebSocket error', error);
//     };
//   }

//   public send(action: any): void {
//     const message = action;
//     if (this.socket.readyState === WebSocket.OPEN) {
//       this.socket.send(message);
//       debugger
//     } else {
//       this.messageQueue.push(message);
//     }
//   }

//   public get messages() {
//     return this.messageSubject.asObservable();
//   }

// }
