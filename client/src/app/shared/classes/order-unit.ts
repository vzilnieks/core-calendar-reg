import { Order } from "./order";
import { Master } from "./master";

export interface OrderUnit {
  date: Date;
  order?: Order[];
  master?: Master[];
}
