const express = require("express");
const { createPayment, allReceipts, deleteRec, getOneReceipt } = require("../controller/electContrl.js");

const electRoute = express.Router();

electRoute.route("/").post(createPayment).get(allReceipts);

electRoute.route("/:id").delete(deleteRec).get(getOneReceipt)

module.exports = electRoute;