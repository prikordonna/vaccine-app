import { MailsState, initialMailsState } from './mail.state';
import { MailsActionsType, MailsActions } from './mail.actions';
import { Mail } from '../../models/mail';

export function mailReducer(
    state: MailsState = initialMailsState,
    action: MailsActions
) {
    switch (action.type) {
        case MailsActionsType.GET_MAILS:
        case MailsActionsType.DELETE_MAIL:
        case MailsActionsType.CHECK_MAIL:
        case MailsActionsType.ADD_MAIL:
            {
                return {
                    ...state
                }
            }
        case MailsActionsType.GET_MAILS_ERROR:
        case MailsActionsType.DELETE_MAIL_ERROR:
        case MailsActionsType.CHECK_MAIL_ERROR:
        case MailsActionsType.ADD_MAIL_ERROR:
            {
                const error = action.payload;
                return {
                    ...state,
                    error,
                }
            }
        case MailsActionsType.GET_MAILS_SUCCESS:
            {
                const data = [...(<Mail[]>action.payload)];
                return {
                    ...state, data
                };
            }
        case MailsActionsType.ADD_MAIL_SUCCESS:
            {
                const mail = { ...(<Mail>action.payload) };
                const data = [...state.data, mail]
                return {
                    ...state,
                    data,
                };
            }
        case MailsActionsType.DELETE_MAIL_SUCCESS:
            {
                const mail = { ...(<Mail>action.payload) };
                const data = state.data.filter((el) => el.id != mail.id)
                return {
                    ...state,
                    data,
                };
            }
        case MailsActionsType.CHECK_MAIL_SUCCESS:
            {
                const mail = { ...(<Mail>action.payload) };
                const data = [...state.data];
                const index = data.findIndex(el => el.id === mail.id);
                data[index] = mail;
                return {
                    ...state,
                    data,
                };
            }
        default: {
            return state;
        }
    }
}
