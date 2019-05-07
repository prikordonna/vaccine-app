import { Infection } from '../../models/Infection';

export interface InfectionsState {
    data: Infection[];
    error: Error | string;
}
export const initialInfectionsState: InfectionsState = {
    data: [],
    error: null,
}