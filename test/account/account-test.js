/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require("assert");
const expect = require("chai").expect;
const should = require("chai").should();
const chai = require("chai");
const chaiHttp = require("chai-http");
const jwt = require("jsonwebtoken");
const server = require("../../prod-server/index.js");
const logger = require("../../config/config").logger;

chai.use(chaiHttp);

const authorizationHeader = "authorization";
let token;

before(() => {
  const payload = {
    user: {
      username: "luc",
      id: 111
    }
  };
  jwt.sign(
    {
      data: payload
    },
    "secret",
    {
      expiresIn: "7d"
    },
    (err, result) => {
      if (result) {
        token = result;
      }
    }
  );
});

describe("Server test - GET /", () => {
  it("Should get status 200", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        
        expect(res).to.exist;
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.message).to.equals("back-end API of the Task Manager");
        expect(res.body.mode).to.equals("Development");
        
        done();
      });
  });
});

describe("Register new user - POST /register", () => {
  it("Should be able to register new user", done => {
    const user = {
      first: "luc",
      last: "joosten",
      username: "test",
      password: "test123"
    };

    chai
      .request(server)
      .post("/api/register")
      .set("Content-Type", "application/json")
      .send(user)
      .end((err, res) => {
        
        expect(res).to.exist;
        expect(res).to.have.status(201);
        expect(res.body.status).not.equals("Status 201");
        expect(res.body.status).to.equals(201);
        expect(res.body.message).to.equals("Added new user!");
        expect(res.body).not.equals("Welcome to the back-end API of the Task Manager");

        done();
        
      });
  });
});
