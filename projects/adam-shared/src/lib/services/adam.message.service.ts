import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class AdamMessageService {

    constructor(private messageService: MessageService) { }

    showTost(type: string, title: string, message: string, duration: number = 1000, closable?: boolean, icon?: string) {
        this.messageService.add({
            severity: type,
            summary: title,
            detail: message,
            life: duration,
            closable: closable,
            icon: icon
        });

    }
}