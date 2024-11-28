export interface Client {
  id: number;
  name: string;
  phone: string;
  birthDate: string;
}

export interface Service {
  id: number;
  clientId: number;
  serviceName: string;
  date: string;
  price: number;
}

export interface DailyReport {
  totalServices: number;
  totalRevenue: number;
  services: Service[];
}