/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDriver = /* GraphQL */ `
  mutation CreateDriver(
    $input: CreateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    createDriver(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDriver = /* GraphQL */ `
  mutation UpdateDriver(
    $input: UpdateDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    updateDriver(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDriver = /* GraphQL */ `
  mutation DeleteDriver(
    $input: DeleteDriverInput!
    $condition: ModelDriverConditionInput
  ) {
    deleteDriver(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCarLocation = /* GraphQL */ `
  mutation CreateCarLocation(
    $input: CreateCarLocationInput!
    $condition: ModelCarLocationConditionInput
  ) {
    createCarLocation(input: $input, condition: $condition) {
      id
      License_no
      Longitude
      Latitude
      IsAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCarLocation = /* GraphQL */ `
  mutation UpdateCarLocation(
    $input: UpdateCarLocationInput!
    $condition: ModelCarLocationConditionInput
  ) {
    updateCarLocation(input: $input, condition: $condition) {
      id
      License_no
      Longitude
      Latitude
      IsAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCarLocation = /* GraphQL */ `
  mutation DeleteCarLocation(
    $input: DeleteCarLocationInput!
    $condition: ModelCarLocationConditionInput
  ) {
    deleteCarLocation(input: $input, condition: $condition) {
      id
      License_no
      Longitude
      Latitude
      IsAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCustomerLocationDestination = /* GraphQL */ `
  mutation CreateCustomerLocationDestination(
    $input: CreateCustomerLocationDestinationInput!
    $condition: ModelCustomerLocationDestinationConditionInput
  ) {
    createCustomerLocationDestination(input: $input, condition: $condition) {
      id
      Customer_id
      latitude_rider
      longitude_rider
      latitude_desination
      longitude_destination
      isAssigned
      Name
      carID
    }
  }
`;
export const updateCustomerLocationDestination = /* GraphQL */ `
  mutation UpdateCustomerLocationDestination(
    $input: UpdateCustomerLocationDestinationInput!
    $condition: ModelCustomerLocationDestinationConditionInput
  ) {
    updateCustomerLocationDestination(input: $input, condition: $condition) {
      id
      Customer_id
      latitude_rider
      longitude_rider
      latitude_desination
      longitude_destination
      IsAssigned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCustomerLocationDestination = /* GraphQL */ `
  mutation DeleteCustomerLocationDestination(
    $input: DeleteCustomerLocationDestinationInput!
    $condition: ModelCustomerLocationDestinationConditionInput
  ) {
    deleteCustomerLocationDestination(input: $input, condition: $condition) {
      id
      Customer_id
      latitude_rider
      longitude_rider
      latitude_desination
      longitude_destination
      IsAssigned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
