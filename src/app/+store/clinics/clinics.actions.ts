import { Action } from '@ngrx/store';
import { Clinic } from '../../models/index';

export enum ClinicsActionsType {
    GET_CLINICS = '[CLINICS] GET_CLINICS',
    GET_CLINICS_SUCCESS = '[CLINICS] GET_CLINICS_SUCCESS',
    GET_CLINICS_ERROR = '[CLINICS] GET_CLINICS_ERROR',

    GET_CLINIC = '[CLINICS] GET_CLINIC',
    GET_CLINIC_SUCCESS = '[CLINICS] GET_CLINIC_SUCCESS',
    GET_CLINIC_ERROR = '[CLINICS] GET_CLINIC_ERROR',

    ADD_CLINIC = '[CLINICS] ADD_CLINIC',
    ADD_CLINIC_SUCCESS = '[CLINICS] ADD_CLINIC_SUCCESS',
    ADD_CLINIC_ERROR = '[CLINICS] ADD_CLINIC_ERROR',

    DEL_CLINIC = '[CLINICS] DEL_CLINIC',
    DEL_CLINIC_SUCCESS = '[CLINICS] DEL_CLINIC_SUCCESS',
    DEL_CLINIC_ERROR = '[CLINICS] DEL_CLINIC_ERROR',

    UPDATE_CLINIC = '[CLINICS] UPDATE_CLINIC',
    UPDATE_CLINIC_SUCCESS = '[CLINICS] UPDATE_CLINIC_SUCCESS',
    UPDATE_CLINIC_ERROR = '[CLINICS] UPDATE_CLINIC_ERROR',
}


export class GetClinics implements Action {
    public readonly type = ClinicsActionsType.GET_CLINICS;
}

export class GetClinicsSuccess implements Action {
    public readonly type = ClinicsActionsType.GET_CLINICS_SUCCESS;
    constructor (public payload: Clinic[]) {
    }
}

export class GetClinicsError implements Action {
    public readonly type = ClinicsActionsType.GET_CLINICS_ERROR;
    constructor (public payload: any | string) {
    }
}

export class GetClinic implements Action {
    public readonly type = ClinicsActionsType.GET_CLINIC;
    constructor (public payload: Clinic) {
    }
}

export class GetClinicSuccess implements Action {
    public readonly type = ClinicsActionsType.GET_CLINIC_SUCCESS;
    constructor (public payload: Clinic) {
    }
}

export class GetClinicError implements Action {
    public readonly type = ClinicsActionsType.GET_CLINIC_ERROR;
    constructor (public payload: any | string) {
    }
}

export class AddClinic implements Action {
    public readonly type = ClinicsActionsType.ADD_CLINIC;
    constructor (public payload: Clinic) {
    }
}

export class AddClinicSuccess implements Action {
    public readonly type = ClinicsActionsType.ADD_CLINIC_SUCCESS;
    constructor (public payload: Clinic) {
    }
}

export class AddClinicError implements Action {
    public readonly type = ClinicsActionsType.ADD_CLINIC_ERROR;
    constructor (public payload: any | string) {
    }
}

export class UpdateClinic implements Action {
    public readonly type = ClinicsActionsType.UPDATE_CLINIC;
    constructor (public payload: Clinic) {
    }
}

export class UpdateClinicSuccess implements Action {
    public readonly type = ClinicsActionsType.UPDATE_CLINIC_SUCCESS;
    constructor (public payload: Clinic) {
    }
}

export class UpdateClinicError implements Action {
    public readonly type = ClinicsActionsType.UPDATE_CLINIC_ERROR;
    constructor (public payload: any | string) {
    }
}
export class DelClinic implements Action {
    public readonly type = ClinicsActionsType.DEL_CLINIC;
    constructor (public payload: Clinic) {
    }
}

export class DelClinicSuccess implements Action {
    public readonly type = ClinicsActionsType.DEL_CLINIC_SUCCESS;
    constructor (public payload: Clinic) {
    }
}

export class DelClinicError implements Action {
    public readonly type = ClinicsActionsType.DEL_CLINIC_ERROR;
    constructor (public payload: any | string) {
    }
}

export type ClinicsActions =
| GetClinics
| GetClinicsSuccess
| GetClinicsError
| GetClinic
| GetClinicSuccess
| GetClinicError
| AddClinic
| AddClinicSuccess
| AddClinicError
| UpdateClinic
| UpdateClinicSuccess
| UpdateClinicError
| DelClinic
| DelClinicSuccess
| DelClinicError;