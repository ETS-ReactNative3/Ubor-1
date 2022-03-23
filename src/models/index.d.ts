import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DriverMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CarLocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerLocationDestinationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Driver {
  readonly id: string;
  readonly License_no: number;
  readonly Email: string;
  readonly Phone: string;
  readonly Fname: string;
  readonly Lname: string;
  readonly DOB: string;
  readonly CarColour: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Driver, DriverMetaData>);
  static copyOf(source: Driver, mutator: (draft: MutableModel<Driver, DriverMetaData>) => MutableModel<Driver, DriverMetaData> | void): Driver;
}

export declare class Customer {
  readonly id: string;
  readonly Customer_id: number;
  readonly Address: string;
  readonly Email: string;
  readonly Phone: string;
  readonly Fname: string;
  readonly Lname: string;
  readonly DOB: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class CarLocation {
  readonly id: string;
  readonly License_no: number;
  readonly Longitude: number;
  readonly Latitude: number;
  readonly IsAvailable: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CarLocation, CarLocationMetaData>);
  static copyOf(source: CarLocation, mutator: (draft: MutableModel<CarLocation, CarLocationMetaData>) => MutableModel<CarLocation, CarLocationMetaData> | void): CarLocation;
}

export declare class CustomerLocationDestination {
  readonly id: string;
  readonly Customer_id: string;
  readonly latitude_rider: number;
  readonly longitude_rider: number;
  readonly latitude_desination: number;
  readonly longitude_destination: number;
  readonly IsAssigned: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CustomerLocationDestination, CustomerLocationDestinationMetaData>);
  static copyOf(source: CustomerLocationDestination, mutator: (draft: MutableModel<CustomerLocationDestination, CustomerLocationDestinationMetaData>) => MutableModel<CustomerLocationDestination, CustomerLocationDestinationMetaData> | void): CustomerLocationDestination;
}