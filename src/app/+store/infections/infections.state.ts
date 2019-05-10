import { Infection } from '../../models/Infection';

export interface InfectionsState {
    data: Infection[];
    infectionToEdit: Infection;
    error: Error | string;
}
export const initialInfectionsState: InfectionsState = {
    data: [],
    infectionToEdit: null,
    error: null,
}