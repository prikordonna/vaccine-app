import { ClinicsState } from './clinics/clinics.state';
import { InfectionsState } from './infections/infections.state';
import { MailState } from './mail/mail.state';

export interface AppState {
    clinics: ClinicsState;
    infections: InfectionsState;
    mails: MailState;
}

// export const appInitialState: AppState = {};