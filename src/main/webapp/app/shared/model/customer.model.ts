import { IOrder } from 'app/shared/model/order.model';

export interface ICustomer {
  id?: number;
  code?: string;
  firstname?: string;
  lastname?: string;
  orders?: IOrder[];
}

export class Customer implements ICustomer {
  constructor(public id?: number, public code?: string, public firstname?: string, public lastname?: string, public orders?: IOrder[]) {}
}
