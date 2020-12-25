import { ICustomer } from 'app/shared/model/customer.model';

export interface IOrder {
  id?: number;
  code?: string;
  customer?: ICustomer;
}

export class Order implements IOrder {
  constructor(public id?: number, public code?: string, public customer?: ICustomer) {}
}
