var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()



exports.handler = async (event, context) => {
    let date = new Date()
    if (event.request.userAttributes.sub) {
        console.log(event)
        let params = {};
        if(event.request.userAttributes['custom:license']){
            console.log("Driver");
            params = {
                Item: {
                    'id': {S: event.request.userAttributes.sub},
                    '__typename': {S: 'Driver'},
                    //'username': {S: event.userName},
                    'License_no' : {S:event.request.userAttributes['custom:license']},
                    'Email': {S: event.request.userAttributes.email},
                    'Phone' : {S: event.request.userAttributes.phone_number},
                    'Fname' : {S: event.request.userAttributes['custom:fname']},
                    'Lname' : {S: event.request.userAttributes['custom:lname']},
                    'DOB' : {S: event.request.userAttributes['custom:dob']},
                    'CarColour' : {S: event.request.userAttributes['custom:carColour']},
                    'Latitude' : {S: "37.125454"},
                    'Longitude' : {S: "122.081058"},
                    'IsAvailable' : {S: "false"},
                    'createdAt': {S: date.toISOString()},
                    'updatedAt': {S: date.toISOString()},
                },
                TableName: process.env.DRIVERTABLE
            }
        }
        else{
            console.log("Customer");
            params = {
                Item: {
                    'id': {S: event.request.userAttributes.sub},
                    'Customer_id' : {S: '0' } ,
                    '__typename': {S: 'Customer'},
                    //'username': {S: event.userName},
                    'Address' : {S: 'fill-in'},
                    'Email': {S: event.request.userAttributes.email},
                    'Phone' : {S: event.request.userAttributes.phone_number},
                    'Fname' : {S: event.request.userAttributes['custom:fname']},
                    'Lname' : {S: event.request.userAttributes['custom:lname']},
                    'DOB' : {S: event.request.userAttributes['custom:dob']},
                    'createdAt': {S: date.toISOString()},
                    'updatedAt': {S: date.toISOString()},
                },
                TableName: process.env.CUSTOMERTABLE
            }
        }
        

        try {
            await ddb.putItem(params).promise()
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }

        console.log("Success: Everything executed correctly")
        context.done(null, event)

    } else {
        console.log("Error: Nothing was written to DynamoDB")
        context.done(null, event)
    }
};