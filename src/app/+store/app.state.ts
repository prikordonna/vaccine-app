import { ClinicState } from './clinic/clinic.state';
import { InfectionsState } from './infections/infections.state';

export interface AppState {
    clinics: ClinicState;
    infections: InfectionsState;
}

// export const appInitialState: AppState = {};