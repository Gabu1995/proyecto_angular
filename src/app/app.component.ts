import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'jos';
  onSaveClick() {}
  items: MenuItem[];

  constructor(private messageService: MessageService) {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh', command: () => this.update() },
      { label: 'Delete', icon: 'pi pi-times', command: () => this.delete() },
      { label: 'Angular Website', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Upload', icon: 'pi pi-upload', routerLink: ['/fileupload'] }
    ];
  }

  save(severity: string) {
    this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
  }
}
