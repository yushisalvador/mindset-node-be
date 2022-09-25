const chai = require("chai");
const { expect, assert } = require("chai");
const chaiHttp = require("chai-http");
const config = require("../../knexfile");
const knex = require("knex")(config);
const diaryModel = require("../diary/diary_model");
const server = require("../../server");
const fixtures = require("./fixtures");
chai.use(chaiHttp);

describe("GET api/entries route", function () {
  it("should return an array of all entries", async () => {
    const entries = await diaryModel.getAllEntries();
    expect(entries).to.be.an.instanceof(Array);
  });
});

describe("POST api/entries route", function () {
  const newEntry = fixtures.getEntry();

  afterEach(async () => {
    await knex.delete("*").from("entries").where("entries.username", "test");
  });
  it("should return status 200 when post request is successful", async () => {
    const postReq = await chai
      .request(server)
      .post("/api/entries")
      .send(newEntry);
    expect(postReq.statusCode).equals(200);
  });
  it("should increment the number of entries by 1", async () => {
    const entries = await diaryModel.getAllEntries().length;
    const postReq = await chai
      .request(server)
      .post("/api/entries")
      .send(newEntry);
    const afterEntries = await diaryModel.getAllEntries().length;

    expect(entries).to.be.lessThan(afterEntries);
  });
});
