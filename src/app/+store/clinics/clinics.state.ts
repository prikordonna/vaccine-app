import { Clinic } from '../../models/index';

export interface ClinicsState {
    data: Clinic[],
    clinicToEdit: Clinic;
    error: any | string;
}

export const initialClinicState: ClinicsState = {
    data: [],
    clinicToEdit: null,
    error: null,
}