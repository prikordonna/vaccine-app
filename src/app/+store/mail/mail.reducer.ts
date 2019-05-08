import { MailState, initialMailState } from './mail.state';
import { MailActionsType, MailsActions } from './mail.actions';
import { Mail } from '../../models/mail';

export function mailReducer(state: MailState = initialMailState, action: MailsActions) {
    switch (action.type) {
        case MailActionsType.GET_MAILS:
            {
                console.log('get mails action');
                return {
                    ...state
                }
            }
        case MailActionsType.GET_MAILS_SUCCESS:
            {
                console.log('get mails success')
                const data = [...(<Mail[]>action.payload)];
                return {
                    ...state, data
                };
            }
        default: {
            console.log('mails unknown task')
            return state;
        }
    }
}
