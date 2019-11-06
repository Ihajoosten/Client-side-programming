/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const jwt = require("jsonwebtoken");
const server = require("../../prod-server/index.js");
const logger = require("../../config/config").logger;

chai.should();
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
      .end((req, err, res) => {
        if (err) {
          logger.error(err.message);
          done();
        }
        //res.should.exist;
        res.status() === 200;

        // const app = req.body;
        // app.should.be.an("object");
        // app.should.have.property("first").that.is.a("string");
        // app.should.have.property("last").that.is.a("string");
        // app.should.have.property("username").that.is.a("string");
        // app.should.have.property("password").that.is.a("string");
        // app.should.not.have.property("wheight");

        done();
      });
  });
});
