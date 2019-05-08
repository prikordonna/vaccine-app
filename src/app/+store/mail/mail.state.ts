import { Mail } from '../../models/mail';

export interface MailState {
    data: Mail[];
    error: Error | string;
    readonly mailToDelete: Readonly<Mail>;
}
export const initialMailState: MailState = {
    data: [],
    error: null,
    mailToDelete: null
}