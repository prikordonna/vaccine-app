import { Action } from '@ngrx/store';
import { Mail } from '../../models/mail';

export enum MailActionsType { 
    GET_MAILS = '[MAILS] GET_MAILS',
    DELETE_MAIL = '[MAILS] DELETE_MAILS', 
    GET_MAILS_SUCCESS = '[MAILS] GET_MAILS_SUCCESS',
    GET_MAILS_ERROR = '[MAILS] GET_MAILS_ERROR',
}


export class GetMails implements Action {
    public readonly type = MailActionsType.GET_MAILS;
}

export class DeleteMail implements Action {
    public readonly type = MailActionsType.DELETE_MAIL;
    constructor (public payload: Mail) {
        
    }
}

export class GetMailsSuccess implements Action {
    public readonly type = MailActionsType.GET_MAILS_SUCCESS;
    constructor (public payload: Mail[]) {

    }
}

export class GetMailsError implements Action {
    public readonly type = MailActionsType.GET_MAILS_ERROR;
    constructor (public payload: any | string) {
    }
}

export type MailsActions = GetMails | DeleteMail | GetMailsSuccess | GetMailsError;
