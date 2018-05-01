export interface User {

  id: number;
  username: string;
  name: string;
  password: string;
  phone?: string;
  role_id: number[];
}
