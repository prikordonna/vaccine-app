import { Action } from '@ngrx/store';
import { Infection } from '../../models/Infection';

export enum InfectionsActionsType {
    GET_INFECTIONS = '[INFECTIONS] GET_INFECTIONS',
    GET_INFECTIONS_SUCCESS = '[INFECTIONS] GET_INFECTIONS_SUCCESS',
    GET_INFECTIONS_ERROR = '[INFECTIONS] GET_INFECTIONS_ERROR',

    GET_INFECTION = '[INFECTIONS] GET_INFECTION',
    GET_INFECTION_SUCCESS = '[INFECTIONS] GET_INFECTION_SUCCESS',
    GET_INFECTION_ERROR = '[INFECTIONS] GET_INFECTION_ERROR',

    UPDATE_INFECTION = '[INFECTIONS] UPDATE_INFECTION',
    UPDATE_INFECTION_SUCCESS = '[INFECTIONS] UPDATE_INFECTION_SUCCESS',
    UPDATE_INFECTION_ERROR = '[INFECTIONS] UPDATE_INFECTION_ERROR',

    ADD_INFECTION = '[INFECTIONS] ADD_INFECTION',
    ADD_INFECTION_SUCCESS = '[INFECTIONS] ADD_INFECTION_SUCCESS',
    ADD_INFECTION_ERROR = '[INFECTIONS] ADD_INFECTION_ERROR',

        DEL_INFECTION = '[INFECTIONS] DEL_INFECTION',
    DEL_INFECTION_SUCCESS = '[INFECTIONS] DEL_INFECTION_SUCCESS',
    DEL_INFECTION_ERROR = '[INFECTIONS] DEL_INFECTION_ERROR',
}


export class GetInfections implements Action {
    public readonly type = InfectionsActionsType.GET_INFECTIONS;
}

export class GetInfectionsSuccess implements Action {
    public readonly type = InfectionsActionsType.GET_INFECTIONS_SUCCESS;
    constructor(public payload: Infection[]) {
    }
}

export class GetInfectionsError implements Action {
    public readonly type = InfectionsActionsType.GET_INFECTIONS_ERROR;
    constructor(public payload: any | string) {
    }
}

export class GetInfection implements Action {
    public readonly type = InfectionsActionsType.GET_INFECTION;
    constructor(public payload: Infection) {
    }
}

export class GetInfectionSuccess implements Action {
    public readonly type = InfectionsActionsType.GET_INFECTION_SUCCESS;
    constructor(public payload: Infection) {
    }
}

export class GetInfectionError implements Action {
    public readonly type = InfectionsActionsType.GET_INFECTION_ERROR;
    constructor(public payload: any | string) {
    }
}

export class UpdateInfection implements Action {
    public readonly type = InfectionsActionsType.UPDATE_INFECTION;
    constructor(public payload: Infection) {
    }
}

export class UpdateInfectionSuccess implements Action {
    public readonly type = InfectionsActionsType.UPDATE_INFECTION_SUCCESS;
    constructor(public payload: Infection) {
    }
}

export class UpdateInfectionError implements Action {
    public readonly type = InfectionsActionsType.UPDATE_INFECTION_ERROR;
    constructor(public payload: any | string) {
    }
}

export class AddInfection implements Action {
    public readonly type = InfectionsActionsType.ADD_INFECTION;
    constructor(public payload: Infection) {
    }
}

export class AddInfectionSuccess implements Action {
    public readonly type = InfectionsActionsType.ADD_INFECTION_SUCCESS;
    constructor(public payload: Infection) {
    }
}

export class AddInfectionError implements Action {
    public readonly type = InfectionsActionsType.ADD_INFECTION_ERROR;
    constructor(public payload: any | string) {
    }
}

export class DelInfection implements Action {
    public readonly type = InfectionsActionsType.DEL_INFECTION;
    constructor(public payload: Infection) {
    }
}

export class DelInfectionSuccess implements Action {
    public readonly type = InfectionsActionsType.DEL_INFECTION_SUCCESS;
    constructor(public payload: Infection) {
    }
}

export class DelInfectionError implements Action {
    public readonly type = InfectionsActionsType.DEL_INFECTION_ERROR;
    constructor(public payload: any | string) {
    }
}

export type InfectionsActions =
    | GetInfections
    | GetInfectionsSuccess
    | GetInfectionsError
    | GetInfection
    | GetInfectionSuccess
    | GetInfectionError
    | UpdateInfection
    | UpdateInfectionSuccess
    | UpdateInfectionError
    | AddInfection
    | AddInfectionSuccess
    | AddInfectionError
    | DelInfection
    | DelInfectionSuccess
    | DelInfectionError;

