import { Component } from '@angular/core';
import { Values } from '../../services/values';

@Component({
  imports: [],
  selector: 'app-send-data-to-service',
  styleUrl: './send-data-to-service.css',
  templateUrl: './send-data-to-service.html',
})
export class SendDataToService {

  constructor(private messageService: Values){

  }

  sendData(){
    this.messageService.setData("You need to win Harisree");
  }
}
