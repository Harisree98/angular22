import { Component, OnInit } from '@angular/core';
import { Values } from '../../services/values';

@Component({
  imports: [],
  selector: 'app-get-data-from-service',
  styleUrl: './get-data-from-service.css',
  templateUrl: './get-data-from-service.html',
})
export class GetDataFromService implements OnInit {

  message: any;

  constructor(private messageService: Values){

  }
  ngOnInit(): void {
   //
  }

  getData(){
    console.log(this.messageService.getData());

  }
}
