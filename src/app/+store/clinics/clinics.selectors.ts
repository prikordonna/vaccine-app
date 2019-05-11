import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ClinicsState } from './clinics.state';

export const getClinicState = createFeatureSelector<ClinicsState>('clinics');

export const getClinicData = createSelector(getClinicState, (state: ClinicsState) => state.data);
export const getClinicError = createSelector(getClinicState, (state: ClinicsState) => state.error);
export const getClinicToEdit = createSelector(getClinicState, (state: ClinicsState) => state.clinicToEdit);