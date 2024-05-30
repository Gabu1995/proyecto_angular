import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css'],
  providers: [MessageService],
})
export class MensajeriaComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}

}
