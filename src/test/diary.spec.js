const { expect, assert } = require("chai");
const chaiHttp = require("chai-http");
const config = require("../../knexfile");
const knex = require("knex")(config);
const diaryModel = require("../diary/diary_model");

describe("GET api/entries route", function () {
  it("should return an array of all entries", async () => {
    const entries = await diaryModel.getAllEntries();
    expect(entries).to.be.an.instanceof(Array);
  });
});
