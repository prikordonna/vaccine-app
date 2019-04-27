import { Location } from '../../models/index';
export interface LocationState {
    data: Location[]
}
export const initialLocationState: LocationState = {
    data: []
}