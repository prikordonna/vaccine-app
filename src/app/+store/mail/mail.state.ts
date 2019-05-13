import { Mail } from '../../models/mail';

export interface MailsState {
    data: Mail[];
    error: Error | string;
}
export const initialMailsState: MailsState = {
    data: [],
    error: null
}