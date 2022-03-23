// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Driver, Customer, CarLocation, CustomerLocationDestination } = initSchema(schema);

export {
  Driver,
  Customer,
  CarLocation,
  CustomerLocationDestination
};