import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public socket: any;
  
  public student = {
    studentName: '',
    nationalId: '',
    isReadyForDismissal: '',
    isAvailableForCall: '',
    isPickedToday: ''
 }

  constructor() { }

  public connectSocket() {

    this.socket = io(environment.socket_url, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000
    });

    this.socket.on('readyForDismissal', elem => {
      console.log('readyForDismissal - ',elem)
    });

    this.socket.on('availableForCall', elem => {
      console.log('availableForCall - ',elem)
    });

    this.socket.on('pickedUp', elem => {
      console.log('readyFpickedUporDismissal - ',elem)
    });
  }
}
