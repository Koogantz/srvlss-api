const translate = require("translate");
const _ = require("lodash");

module.exports.translateSchema = async (schema) => {
  const translatedKeys = {};
  for (const key of schema) {
    let keyES = await translate(key, "ES"); /// Traduccion del atributo a espanol

    keyES = keyES.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Eliminar tildes del resultado

    if (!/^[a-zA-Z\s_]+$/.test(keyES))
      keyES = keyES.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, ""); // Corregir errores de la traduccion

    keyES = keyES.replace(/_/g, " "); 
    translatedKeys[key] = _.camelCase(keyES); // Convertir a camalCase
  }
  return translatedKeys;
};
