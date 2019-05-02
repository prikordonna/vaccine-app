import { Action } from '@ngrx/store';
import { Clinic } from '../../models/index';

export enum ClinicActionsType { 
    GET_CLINICS = '[CLINICS] GET_CLINICS',
    ADD_CLINIC = '[CLINICS] ADD_CLINIC', 
    GET_CLINICS_SUCCESS = '[CLINICS] GET_CLINICS_SUCCESS',
    GET_CLINICS_ERROR = '[CLINICS] GET_CLINICS_ERROR',
}


export class GetClinics {
    public readonly type = ClinicActionsType.GET_CLINICS;
}

export class AddClinic {
    public readonly type = ClinicActionsType.ADD_CLINIC;
    constructor (public payload: Clinic) {
        
    }
}

export class GetClinicsSuccess {
    public readonly type = ClinicActionsType.GET_CLINICS_SUCCESS;
    constructor (public payload: Clinic[]) {

    }
}

export class GetClinicsError {
    public readonly type = ClinicActionsType.GET_CLINICS_ERROR;
    constructor (public payload: any | string) {
    }
}

export type ClinicsActions = GetClinics | AddClinic | GetClinicsSuccess | GetClinicsError;

