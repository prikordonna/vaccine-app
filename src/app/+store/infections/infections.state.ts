import { Infection } from '../../models/Infection';

export interface InfectionsState {
    data: Infection[];
    error: Error | string;
    readonly infectionToEdit: Readonly<Infection>;
}
export const initialInfectionsState: InfectionsState = {
    data: [],
    error: null,
    infectionToEdit: null
}