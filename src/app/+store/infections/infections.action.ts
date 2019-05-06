import { Action } from '@ngrx/store';
import { Infection } from '../../models/Infection';

export enum InfectionsActionsType {
    GET_INFECTIONS = '[INFECTIONS] GET_INFECTIONS',
    GET_INFECTIONS_SUCCESS = '[INFECTIONS] GET_INFECTIONS_SUCCESS',
    GET_INFECTIONS_ERROR = '[INFECTIONS] GET_INFECTIONS_ERROR',
    EDIT_INFECTION = '[INFECTIONS] EDIT_INFECTION',
    EDIT_INFECTION_SUCCESS = '[INFECTIONS] EDIT_INFECTION_SUCCESS',
    ADD_INFECTION = '[INFECTIONS] ADD_INFECTION',
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

export class EditInfection implements Action {
    public readonly type = InfectionsActionsType.EDIT_INFECTION;
    constructor(public payload: Infection) {

    }
}

export class EditInfectionSuccess implements Action {
    public readonly type = InfectionsActionsType.EDIT_INFECTION_SUCCESS;
    constructor(public payload: Infection) {

    }
}

export class AddInfection implements Action {
    public readonly type = InfectionsActionsType.ADD_INFECTION;
    constructor(public payload: Infection) {

    }
}

export type InfectionsActions =
    | GetInfections
    | GetInfectionsSuccess
    | GetInfectionsError
    | AddInfection;

