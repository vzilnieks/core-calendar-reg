import { Order } from "./order";
import { Master } from "./master";

export interface OrderUnit {
  day: number;
  hour: number;
  date: Date;
  order?: Order[];
  master?: Master[];
}
