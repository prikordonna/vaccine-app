import { Clinic } from '../../models/index';
export interface ClinicState {
    data: Clinic[]
}
export const initialClinicState: ClinicState = {
    data: []
}