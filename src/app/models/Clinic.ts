export interface Clinic {
    id?:string;
    lat: number;
    lng: number;
    draggable: boolean;
    title: string; 
    icon: string;
    clinic_name: string;
    address: string;
    phone: string;
    website: string;
    vaccines: string;
}