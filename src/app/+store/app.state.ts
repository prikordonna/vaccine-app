import { ClinicsState } from './clinics/clinics.state';
import { InfectionsState } from './infections/infections.state';
import { MailsState } from './mail/mail.state';

export interface AppState {
    clinics: ClinicsState;
    infections: InfectionsState;
    mails: MailsState;
}