const loadDataService = require("../src/services/load-data.services");
const utilTranslate = require("../src/utils/translate");
const datasource = require("../datasource");
const axios = require("axios");
const mocks = require("./utils/mocks");

describe("Load Data", () => {
  it("Resource starships", async () => {
    datasource.dynamoDbClient.put = jest
      .fn()
      .mockResolvedValueOnce(() => Promise.resolve(true));
    const responseStarships = JSON.parse(
      JSON.stringify(mocks.baseResponseSwapi)
    );
    responseStarships.data.results = [];
    responseStarships.data.results.push(mocks.starshipsMock);
    axios.get = jest.fn().mockResolvedValueOnce(responseStarships);
    const response = await loadDataService.loadByName("starships");
    expect(response.status).toBe(200);
  });

  it("Resource people", async () => {
    datasource.dynamoDbClient.put = jest
      .fn()
      .mockResolvedValueOnce(() => Promise.resolve(true));
    const responsePeople = JSON.parse(JSON.stringify(mocks.baseResponseSwapi));
    responsePeople.data.results = [];
    responsePeople.data.results.push(mocks.peopleMock);
    axios.get = jest.fn().mockResolvedValueOnce(responsePeople);
    const response = await loadDataService.loadByName("people");
    expect(response.status).toBe(200);
  });

  it("Resource planets", async () => {
    datasource.dynamoDbClient.put = jest
      .fn()
      .mockResolvedValueOnce(() => Promise.resolve(true));
    const responsePlanets = JSON.parse(JSON.stringify(mocks.baseResponseSwapi));
    responsePlanets.data.results = [];
    responsePlanets.data.results.push(mocks.planetsMock);
    axios.get = jest.fn().mockResolvedValueOnce(responsePlanets);
    const response = await loadDataService.loadByName("planets");
    expect(response.status).toBe(200);
  });

  it("Resource films", async () => {
    datasource.dynamoDbClient.put = jest
      .fn()
      .mockResolvedValueOnce(() => Promise.resolve(true));
    const responseFilms = JSON.parse(JSON.stringify(mocks.baseResponseSwapi));
    responseFilms.data.results = [];
    responseFilms.data.results.push(mocks.filmsMock);
    axios.get = jest.fn().mockResolvedValueOnce(responseFilms);
    const response = await loadDataService.loadByName("films");
    expect(response.status).toBe(200);
  });

  it("Resource species", async () => {
    datasource.dynamoDbClient.put = jest
      .fn()
      .mockResolvedValueOnce(() => Promise.resolve(true));
    const responseSpecies = JSON.parse(JSON.stringify(mocks.baseResponseSwapi));
    responseSpecies.data.results = [];
    responseSpecies.data.results.push(mocks.speciesMock);
    axios.get = jest.fn().mockResolvedValueOnce(responseSpecies);
    const response = await loadDataService.loadByName("species");
    expect(response.status).toBe(200);
  });

  it("Resource vehicles", async () => {
    datasource.dynamoDbClient.put = jest
      .fn()
      .mockResolvedValueOnce(() => Promise.resolve(true));
    const responseVehicles = JSON.parse(
      JSON.stringify(mocks.baseResponseSwapi)
    );
    responseVehicles.data.results = [];
    responseVehicles.data.results.push(mocks.vehiclesMock);
    axios.get = jest.fn().mockResolvedValueOnce(responseVehicles);
    const response = await loadDataService.loadByName("vehicles");
    expect(response.status).toBe(200);
  });
});

describe("Translate Schema", () => {
  it("Schema starships", async () => {
    const starshipsSchema = Object.keys(mocks.starshipsMock);
    const response = await utilTranslate.translateSchema(starshipsSchema);
    console.log("Before translate", starshipsSchema[0]);
    console.log("After translate", response[starshipsSchema[0]]);
    expect(response[starshipsSchema[0]] !== starshipsSchema[0]).toBe(true);
  });

  it("Schema people", async () => {
    const peopleSchema = Object.keys(mocks.peopleMock);
    const response = await utilTranslate.translateSchema(peopleSchema);
    console.log("Before translate", peopleSchema[0]);
    console.log("After translate", response[peopleSchema[0]]);
    expect(response[peopleSchema[0]] !== peopleSchema[0]).toBe(true);
  });

  it("Schema planets", async () => {
    const planetsSchema = Object.keys(mocks.planetsMock);
    const response = await utilTranslate.translateSchema(planetsSchema);
    console.log("Before translate", planetsSchema[0]);
    console.log("After translate", response[planetsSchema[0]]);
    expect(response[planetsSchema[0]] !== planetsSchema[0]).toBe(true);
  });

  it("Schema films", async () => {
    const filmsSchema = Object.keys(mocks.filmsMock);
    const response = await utilTranslate.translateSchema(filmsSchema);
    console.log("Before translate", filmsSchema[0]);
    console.log("After translate", response[filmsSchema[0]]);
    expect(response[filmsSchema[0]] !== filmsSchema[0]).toBe(true);
  });

  it("Schema species", async () => {
    const speciesSchema = Object.keys(mocks.speciesMock);
    const response = await utilTranslate.translateSchema(speciesSchema);
    console.log("Before translate", speciesSchema[0]);
    console.log("After translate", response[speciesSchema[0]]);
    expect(response[speciesSchema[0]] !== speciesSchema[0]).toBe(true);
  });

  it("Schema vehicles", async () => {
    const vehiclesSchema = Object.keys(mocks.vehiclesMock);
    const response = await utilTranslate.translateSchema(vehiclesSchema);
    console.log("Before translate", vehiclesSchema[0]);
    console.log("After translate", response[vehiclesSchema[0]]);
    expect(response[vehiclesSchema[0]] !== vehiclesSchema[0]).toBe(true);
  });
});
