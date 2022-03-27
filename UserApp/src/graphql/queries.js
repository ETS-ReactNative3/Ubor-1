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
      Latitude
      Longitude
      IsAvailable
      Customer_id
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
        Latitude
        Longitude
        IsAvailable
        Customer_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchDrivers = /* GraphQL */ `
  query SearchDrivers(
    $filter: SearchableDriverFilterInput
    $sort: [SearchableDriverSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableDriverAggregationInput]
  ) {
    searchDrivers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
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
        Latitude
        Longitude
        IsAvailable
        Customer_id
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
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
export const searchCustomers = /* GraphQL */ `
  query SearchCustomers(
    $filter: SearchableCustomerFilterInput
    $sort: [SearchableCustomerSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCustomerAggregationInput]
  ) {
    searchCustomers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
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
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
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
export const searchCarLocations = /* GraphQL */ `
  query SearchCarLocations(
    $filter: SearchableCarLocationFilterInput
    $sort: [SearchableCarLocationSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCarLocationAggregationInput]
  ) {
    searchCarLocations(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
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
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCustomerLocationDestination = /* GraphQL */ `
  query GetCustomerLocationDestination($id: ID!) {
    getCustomerLocationDestination(id: $id) {
      id
      Customer_id
      Name
      latitude_rider
      longitude_rider
      latitude_desination
      longitude_destination
      isAssigned
      carID
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
        Name
        latitude_rider
        longitude_rider
        latitude_desination
        longitude_destination
        isAssigned
        carID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchCustomerLocationDestinations = /* GraphQL */ `
  query SearchCustomerLocationDestinations(
    $filter: SearchableCustomerLocationDestinationFilterInput
    $sort: [SearchableCustomerLocationDestinationSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCustomerLocationDestinationAggregationInput]
  ) {
    searchCustomerLocationDestinations(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        Customer_id
        Name
        latitude_rider
        longitude_rider
        latitude_desination
        longitude_destination
        isAssigned
        carID
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
