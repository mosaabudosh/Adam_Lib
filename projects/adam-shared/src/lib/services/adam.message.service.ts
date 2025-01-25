import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class AdamMessageService {

    constructor(private messageService: MessageService) { }

    showSuccess(severity: string = 'success', summary: string = 'Success', detail: string = 'Message Content') {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }

    showInfo(severity: string = 'info', summary: string = 'Info', detail: string = 'Message Content') {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }

    showWarn(severity: string = 'warn', summary: string = 'Warning', detail: string = 'Message Content') {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }

    showError(severity: string = 'error', summary: string = 'error', detail: string = 'Message Content') {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }
}