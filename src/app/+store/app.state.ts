import { ClinicState } from './clinic/clinic.state';
import { InfectionsState } from './infections/infections.state';
import { MailState } from './mail/mail.state';

export interface AppState {
    clinics: ClinicState;
    infections: InfectionsState;
    mails: MailState;
}

// export const appInitialState: AppState = {};