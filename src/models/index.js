// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CustomerLocationDestination, Customer, CarLocation, Driver } = initSchema(schema);

export {
  CustomerLocationDestination,
  Customer,
  CarLocation,
  Driver
};