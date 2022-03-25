/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDriver = /* GraphQL */ `
  query GetDriver($id: ID!) {
    getDriver(id: $id) {
      id
      License_no
      Email
      Phone
      Fname
      Lname
      DOB
      CarColour
      createdAt
      updatedAt
    }
  }
`;
export const listDrivers = /* GraphQL */ `
  query ListDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        License_no
        Email
        Phone
        Fname
        Lname
        DOB
        CarColour
        createdAt
        updatedAt
        Longitude
        Latitude
        IsAvailable
      }
      nextToken
    }
  }
`;
export const syncDrivers = /* GraphQL */ `
  query SyncDrivers(
    $filter: ModelDriverFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDrivers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        License_no
        Email
        Phone
        Fname
        Lname
        DOB
        CarColour
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      Customer_id
      Address
      Email
      Phone
      Fname
      Lname
      DOB
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Customer_id
        Address
        Email
        Phone
        Fname
        Lname
        DOB
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Customer_id
        Address
        Email
        Phone
        Fname
        Lname
        DOB
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCarLocation = /* GraphQL */ `
  query GetCarLocation($id: ID!) {
    getCarLocation(id: $id) {
      id
      License_no
      Longitude
      Latitude
      IsAvailable
      createdAt
      updatedAt
    }
  }
`;
export const listCarLocations = /* GraphQL */ `
  query ListCarLocations(
    $filter: ModelCarLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        License_no
        Longitude
        Latitude
        IsAvailable
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const syncCarLocations = /* GraphQL */ `
  query SyncCarLocations(
    $filter: ModelCarLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        License_no
        Longitude
        Latitude
        IsAvailable
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomerLocationDestination = /* GraphQL */ `
  query GetCustomerLocationDestination($id: ID!) {
    getCustomerLocationDestination(id: $id) {
      id
      Customer_id
      latitude_rider
      longitude_rider
      latitude_desination
      longitude_destination
      IsAssigned
      createdAt
      updatedAt
    }
  }
`;
export const listCustomerLocationDestinations = /* GraphQL */ `
  query ListCustomerLocationDestinations(
    $filter: ModelCustomerLocationDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerLocationDestinations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Customer_id
        latitude_rider
        longitude_rider
        latitude_desination
        longitude_destination
        isAssigned
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const syncCustomerLocationDestinations = /* GraphQL */ `
  query SyncCustomerLocationDestinations(
    $filter: ModelCustomerLocationDestinationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomerLocationDestinations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Customer_id
        latitude_rider
        longitude_rider
        latitude_desination
        longitude_destination
        IsAssigned
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
