const axios = require("axios");
const { dynamoDbClient } = require("../../datasource");
const { resourcesTable } = require("../utils/constants");
const { translateSchema } = require("../utils/translate");
const { v4 } = require("uuid");

const baseUrl = "https://swapi.dev/api/";

module.exports.loadByName = async function (name) {
  try {
    const response = await axios.get(`${baseUrl}${name}/`); // Obtener recursos con el nombre enviado
    if (response.status !== 200)
      throw Error("No hay información para el recurso solicitado");
    const { results } = response.data;

    const schema = Object.keys(results[0]);
    const schemaES = await translateSchema(schema); // Obtener schema en espanol
    const table = process.env[resourcesTable[name.toUpperCase()]]; // Obtener la tabla para el recurso

    // Insertar los resultados
    for (const obj of results) {
      const objAttrES = {};
      Object.keys(obj).forEach((key) => (objAttrES[schemaES[key]] = obj[key])); // cambiar las keys a espanol
      objAttrES.id = v4();

      const params = {
        TableName: table,
        Item: objAttrES,
      };

      console.log("params", params);

      dynamoDbClient
        .put(params)
        .then((e) =>
          console.log(`Success inserted ${objAttrES.id} in [${name}] table`)
        );
    }

    return {
      status: 200,
      message: `Se crearon correctamente ${results.length} registros en el recurso [${name}]`,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || "Ocurrió un error al importar la data",
    };
  }
};
