import { MailState, initialMailState } from './mail.state';
import { MailActionsType, MailsActions } from './mail.actions';
import { Mail } from '../../models/mail';

export function mailReducer(state: MailState = initialMailState, action: MailsActions) {
    switch (action.type) {
        case MailActionsType.GET_MAILS:
            {
                return {
                    ...state
                }
            }
        case MailActionsType.GET_MAILS_SUCCESS:
            {
                const data = [...(<Mail[]>action.payload)];
                return {
                    ...state, data
                };
            }
        default: {
            return state;
        }
    }
}
