import { Action } from '@ngrx/store';
import { Mail } from '../../models/mail';

export enum MailsActionsType {
    GET_MAILS = '[MAILS] GET_MAILS',
    GET_MAILS_SUCCESS = '[MAILS] GET_MAILS_SUCCESS',
    GET_MAILS_ERROR = '[MAILS] GET_MAILS_ERROR',

    ADD_MAIL = '[MAILS] ADD_MAIL',
    ADD_MAIL_SUCCESS = '[MAILS] ADD_MAIL_SUCCESS',
    ADD_MAIL_ERROR = '[MAILS] ADD_MAIL_ERROR',

    DELETE_MAIL = '[MAILS] DELETE_MAIL',
    DELETE_MAIL_SUCCESS = '[MAILS] DELETE_MAIL_SUCCESS',
    DELETE_MAIL_ERROR = '[MAILS] DELETE_MAIL_ERROR',

    CHECK_MAIL = '[MAILS] CHECK_MAIL',
    CHECK_MAIL_SUCCESS = '[MAILS] CHECK_MAIL_SUCCESS',
    CHECK_MAIL_ERROR = '[MAILS] CHECK_MAIL_ERROR',
}


export class GetMails implements Action {
    public readonly type = MailsActionsType.GET_MAILS;
}

export class GetMailsSuccess implements Action {
    public readonly type = MailsActionsType.GET_MAILS_SUCCESS;
    constructor (public payload: Mail[]) {
    }
}

export class GetMailsError implements Action {
    public readonly type = MailsActionsType.GET_MAILS_ERROR;
    constructor (public payload: Error | string) {
    }
}

export class AddMail implements Action {
    public readonly type = MailsActionsType.ADD_MAIL;
    constructor (public payload: Mail) {
    }
}

export class AddMailSuccess implements Action {
    public readonly type = MailsActionsType.ADD_MAIL_SUCCESS;
    constructor (public payload: Mail) {
    }
}

export class AddMailError implements Action {
    public readonly type = MailsActionsType.ADD_MAIL_ERROR;
    constructor (public payload: Error | string) {
    }
}

export class DeleteMail implements Action {
    public readonly type = MailsActionsType.DELETE_MAIL;
    constructor (public payload: Mail) {
    }
}

export class DeleteMailSuccess implements Action {
    public readonly type = MailsActionsType.DELETE_MAIL_SUCCESS;
    constructor (public payload: Mail) {
    }
}

export class DeleteMailError implements Action {
    public readonly type = MailsActionsType.DELETE_MAIL_ERROR;
    constructor (public payload: Error | string) {
    }
}

export class CheckMail implements Action {
    public readonly type = MailsActionsType.CHECK_MAIL;
    constructor (public payload: Mail) {
    }
}

export class CheckMailSuccess implements Action {
    public readonly type = MailsActionsType.CHECK_MAIL_SUCCESS;
    constructor (public payload: Mail) {
    }
}

export class CheckMailError implements Action {
    public readonly type = MailsActionsType.CHECK_MAIL_ERROR;
    constructor (public payload: Error | string) {
    }
}

export type MailsActions =
| GetMails
| GetMailsSuccess
| GetMailsError
| AddMail
| AddMailSuccess
| AddMailError
| DeleteMail
| DeleteMailSuccess
| DeleteMailError
| CheckMail
| CheckMailSuccess
| CheckMailError;