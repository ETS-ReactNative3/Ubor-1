/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDriver = /* GraphQL */ `
  subscription OnCreateDriver {
    onCreateDriver {
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
export const onUpdateDriver = /* GraphQL */ `
  subscription OnUpdateDriver {
    onUpdateDriver {
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
export const onDeleteDriver = /* GraphQL */ `
  subscription OnDeleteDriver {
    onDeleteDriver {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateCarLocation = /* GraphQL */ `
  subscription OnCreateCarLocation {
    onCreateCarLocation {
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
export const onUpdateCarLocation = /* GraphQL */ `
  subscription OnUpdateCarLocation {
    onUpdateCarLocation {
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
export const onDeleteCarLocation = /* GraphQL */ `
  subscription OnDeleteCarLocation {
    onDeleteCarLocation {
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
export const onCreateCustomerLocationDestination = /* GraphQL */ `
  subscription OnCreateCustomerLocationDestination {
    onCreateCustomerLocationDestination {
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
export const onUpdateCustomerLocationDestination = /* GraphQL */ `
  subscription OnUpdateCustomerLocationDestination {
    onUpdateCustomerLocationDestination {
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
export const onDeleteCustomerLocationDestination = /* GraphQL */ `
  subscription OnDeleteCustomerLocationDestination {
    onDeleteCustomerLocationDestination {
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
