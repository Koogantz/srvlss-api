const AWS = require("aws-sdk");

module.exports.dynamoDbClient = new AWS.DynamoDB.DocumentClient();
