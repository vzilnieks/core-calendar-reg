export interface Order {

  id: number;
  date: any;
  master_id: number;
  name: string;
  phone: string;
  customer_id?: number;
  time?: number;
  state: boolean;
}
