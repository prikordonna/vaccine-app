import { Clinic } from './Clinic';

export interface Infection {
  id?: string;
  name?: string;
  simptoms?: string;
  result?: string;
  ways?: string;
  day1?: boolean;
  day3?: boolean;
  month2?: boolean;
  month4?: boolean;
  month6?: boolean;
  month12?: boolean;
  month18?: boolean;
  year6?: boolean;
  year14?: boolean;
  year16?: boolean;
  adult?: boolean;
  img: number;
  clinics?: Clinic[];
}