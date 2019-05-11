import { createFeatureSelector, createSelector } from '@ngrx/store';

import { InfectionsState } from './infections.state';

export const getInfectionsState = createFeatureSelector<InfectionsState>('infections');

export const getInfectionData = createSelector(getInfectionsState, (state: InfectionsState) => state.data);
export const getInfectionError = createSelector(getInfectionsState, (state: InfectionsState) => state.error);
export const getInfectionToEdit = createSelector(getInfectionsState, (state: InfectionsState) => state.infectionToEdit);