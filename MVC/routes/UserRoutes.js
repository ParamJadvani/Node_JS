const express = require("express");
const { getUser, createUser } = require("../controllers/UserRequests");

let {Router} = require("express")

let hi=Router()

hi.get("/", getUser);

hi.post("/", createUser);

module.exports={hi};


