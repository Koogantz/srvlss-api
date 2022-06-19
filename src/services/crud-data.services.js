const AWS = require("aws-sdk");
const { v4 } = require("uuid");
const { dynamoDbClient } = require("../../datasource");
const { resourcesTable } = require("../utils/constants");

module.exports.getData = async (name) => {
  const table = process.env[resourcesTable[name.toUpperCase()]];
  const params = {
    TableName: table,
  };

  try {
    const { Items } = await dynamoDbClient.scan(params).promise();
    if (Items) {
      return {
        status: 200,
        data: Items,
      };
    } else {
      return {
        status: 404,
        message: `No se encontraron datos para el recurso [${table}]`,
      };
    }
  } catch (error) {
    return {
      status: 500,
      message:
        error.message || `Ocurrio un error al buscar en el recurso [${table}] `,
    };
  }
};

module.exports.createStudent = async (data) => {
  data.id = v4();
  const params = {
    TableName: process.env.STUDENTS_TABLE,
    Item: data,
  };
  console.log("params****", params);
  try {
    await dynamoDbClient.put(params).promise();
    return {
      status: 200,
      message: `Estudiante creado correctamente`,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: error.message || `No se pudo crear el estudiante`,
    };
  }
};
