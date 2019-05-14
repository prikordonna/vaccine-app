import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MailsState } from './mail.state';

export const getMailsState = createFeatureSelector<MailsState>('mails');

export const getMails = createSelector(
  getMailsState,
  (state: MailsState) => {
    return state.data;
  },
);