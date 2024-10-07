import type { OrderDelivery } from "./order-delivery";
import type { OrderItem } from "./order-item";
import type { PaymentMethod } from "./payment-method";
import type { Status } from "./status";

export interface Order {
  id: number;
  date: Date;
  items: OrderItem[];
  totalPrice: number;
  status: Status;
  paymentMethod: PaymentMethod;
  delivery: OrderDelivery;
}
