/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require("assert");
const expect = require("chai").expect;
const should = require("chai").should();
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../prod-server/index.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Task = require("../prod-server/model/task-model.js");

chai.use(chaiHttp);

let token;

before(() => {
  const payload = {
    user: {
      username: "luc",
      id: "64564"
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

describe("Getting list of tasks - GET /task", () => {
  it("Should get all tasks with correct JWT token", done => {
    chai
      .request(server)
      .get("/api/task")
      .set("Authorization", token)
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(200);
        expect(res.body)
          .to.be.an("object")
          .to.have.property("tasks")
          .to.be.an("array");

        done();
      });
  });

  it("Should not get all tasks without any JWT token", done => {
    chai
      .request(server)
      .get("/api/task")
      .set("Authorization", "")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(401);
        expect(res.body)
          .to.have.property("message")
          .to.be.an("string")
          .to.equal("You must be logged in.");

        done();
      });
  });

  it("Should not get all tasks without Header", done => {
    chai
      .request(server)
      .get("/api/task")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(500);

        done();
      });
  });
});

describe("Get task by ID - GET /task/:id", () => {
  it("Should get task by ID with correct JWT token", done => {
    chai
      .request(server)
      .get("/api/task/5dc2bf41f13f661c40dbd4b5")
      .set("Authorization", token)
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(200);
        expect(res.body)
          .to.have.property("task")
          .to.be.an("object");

        done();
      });
  });

  it("Should not get task by ID without any JWT token", done => {
    chai
      .request(server)
      .get("/api/task/5dc2bf41f13f661c40dbd4b5")
      .set("Authorization", "")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(401);
        expect(res.body)
          .to.have.property("message")
          .to.be.an("string")
          .to.equal("You must be logged in.");

        done();
      });
  });

  it("Should not get tasks by ID without Header", done => {
    chai
      .request(server)
      .get("/api/task/5dc2bf41f13f661c40dbd4b5")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(500);

        done();
      });
  });

  it("Should not get tasks by ID with wrong ID", done => {
    chai
      .request(server)
      .get("/api/task/5")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(500);

        done();
      });
  });
});

describe("Create new Task - POST /task", () => {
  it("Should be able to create new Task with given JWT token", done => {
    const task = {
      title: "Test Task",
      body: "This is a test Task",
      dueDate: "14-12-2019"
    };

    chai
      .request(server)
      .post("/api/task")
      .set("Content-Type", "application/json")
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicGlldCIsImlkIjoiNWRjMWNjZjFlZDIyODIxNDE4MzA0OGI1In0sImlhdCI6MTU3MzA0MjE3NywiZXhwIjoxNTczMTI4NTc3fQ.3Sk-FmvI3VEj64n8FZbLcPTLPqslq7ssmY_viWCVzvc"
      )
      .send(task)
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(201);
        expect(res.body.status).not.equals("Status 201");
        expect(res.body.task).should.be.an("object");

        done();
      });
  });

  it("Should return that the endpoint does not exist", done => {
    chai
      .request(server)
      .post("/api/taskk")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(404);
        expect(res.body)
          .to.have.property("message")
          .to.be.equal("Endpoint does not exist!");
        expect(res.body)
          .to.have.property("code")
          .to.be.equal(404);

        done();
      });
  });

  it("Should not be able to create new Task without JWT token", done => {
    chai
      .request(server)
      .post("/api/task")
      .set("Content-Type", "application/json")
      .set("Authorization", "")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(401);
        expect(res.body)
          .to.have.property("message")
          .to.be.an("string")
          .to.equal("You must be logged in.");

        done();
      });
  });

  it("Should not be able to create new Task without Authorization header", done => {
    chai
      .request(server)
      .post("/api/task")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res).to.exist;
        expect(res).to.have.status(500);

        done();
      });
  });
});

describe("Update task - PUT /task", () => {
  it("Should UPDATE a task ", done => {
    let task = new Task.default({
      title: "The Chronicles of Narnia",
      body: "C.S. Lewis",
      dueDate: new Date("14-12-1999")
    });
    task.save(err => {
      chai
        .request(server)
        .put("/api/task")
        .send({
          title: "The Chronicles of Narnia",
          body: "C.S.",
          dueDate: new Date("15-12-1999")
        })
        .set(
          "Authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicGlldCIsImlkIjoiNWRjMWNjZjFlZDIyODIxNDE4MzA0OGI1In0sImlhdCI6MTU3MzA0MjE3NywiZXhwIjoxNTczMTI4NTc3fQ.3Sk-FmvI3VEj64n8FZbLcPTLPqslq7ssmY_viWCVzvc"
        )
        .set("Content-Type", "application/json")
        .end((err, res) => {
          res.should.have.status(204);
          res.body.should.be.a("object");

          done();
        });
    });
  });
});
