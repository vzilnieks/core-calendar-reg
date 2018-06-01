export interface Order {

  id: number;
  date: Date;
  master_id: number;
  name: string;
  phone: string;
  customer_id?: string;
  state: boolean;
}
