export interface Order {
  id: number;
  date: number;
  hour: number;
  master_id: number;
  name: string;
  phone: string;
  customer_id?: string;
  state: boolean;
  dateCorrected: Date;
}
