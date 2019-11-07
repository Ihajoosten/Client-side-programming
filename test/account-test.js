/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require("assert");
const expect = require("chai").expect;
const should = require("chai").should();
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../prod-server/index.js");

chai.use(chaiHttp);

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
        expect(res.body).not.equals(
          "Welcome to the back-end API of the Task Manager"
        );
        done();
      });
  });
});

describe("Login user - POST /auth", () => {
  it("Should be able to login with existing user", done => {
    const user = {
      username: "luc",
      password: "test123"
    };

    chai
      .request(server)
      .post("/api/auth")
      .set("Content-Type", "application/json")
      .send(user)
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(200);
        expect(res.body).not.equals("Status 201");
        expect(res.body)
          .to.be.an("object")
          .to.have.property("token");

        done();
      });
  });
});

describe("Fail to login - POST /auth", () => {
  it("Should not be able to login with wrong username", done => {
    const user = {
      username: "luc11",
      password: "test123"
    };

    chai
      .request(server)
      .post("/api/auth")
      .set("Content-Type", "application/json")
      .send(user)
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(401);
        expect(res.body.status).to.equals(401);
        expect(res.body.message).to.equals("Username does not match");

        done();
      });
  });

  it("Should not be able to login with wrong password", done => {
    const user = {
      username: "luc",
      password: "TestingThis"
    };

    chai
      .request(server)
      .post("/api/auth")
      .set("Content-Type", "application/json")
      .send(user)
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(401);
        expect(res.body.status).to.equals(401);
        expect(res.body.message).to.equals("Password does not match");        

        done();
      });
  });
});

describe("Endpoints that not exist for - /register", () => {
  it("Should not be able to use - GET /register", done => {
    chai
      .request(server)
      .get("/api/register")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message").to.be.equal("Endpoint does not exist!");
        expect(res.body).to.have.property("code").to.be.equal(404);

        done();
      });
  });

  it("Should not be able to use - PATCH /register", done => {
    chai
      .request(server)
      .patch("/api/register")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message").to.be.equal("Endpoint does not exist!");
        expect(res.body).to.have.property("code").to.be.equal(404);

        done();
      });
  });

  it("Should not be able to use - PUT /register", done => {
    chai
      .request(server)
      .put("/api/register")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message").to.be.equal("Endpoint does not exist!");
        expect(res.body).to.have.property("code").to.be.equal(404);

        done();
      });
  });

  it("Should not be able to use - DELETE /register", done => {
    chai
      .request(server)
      .delete("/api/register")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message").to.be.equal("Endpoint does not exist!");
        expect(res.body).to.have.property("code").to.be.equal(404);

        done();
      });
  });
});

describe("Endpoints that not exist for - /auth", () => {
  it("Should not be able to use - GET /auth", done => {
    chai
      .request(server)
      .get("/api/auth")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message").to.be.equal("Endpoint does not exist!");
        expect(res.body).to.have.property("code").to.be.equal(404);

        done();
      });
  });

  it("Should not be able to use - PATCH /auth", done => {
    chai
      .request(server)
      .patch("/api/auth")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message").to.be.equal("Endpoint does not exist!");
        expect(res.body).to.have.property("code").to.be.equal(404);

        done();
      });
  });

  it("Should not be able to use - PUT /auth", done => {
    chai
      .request(server)
      .put("/api/auth")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message").to.be.equal("Endpoint does not exist!");
        expect(res.body).to.have.property("code").to.be.equal(404);

        done();
      });
  });

  it("Should not be able to use - DELETE /auth", done => {
    chai
      .request(server)
      .delete("/api/auth")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("message").to.be.equal("Endpoint does not exist!");
        expect(res.body).to.have.property("code").to.be.equal(404);

        done();
      });
  });
});