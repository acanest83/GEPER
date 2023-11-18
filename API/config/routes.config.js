const express = require("express");
const router = express.Router();

const requests = require("../Controllers/request.controller");
const users = require("../Controllers/users.controller");
const auth = require("../Middleware/auth.middleware");
const homeController = require('../Controllers/home.controller');


//HOME ROUTE//
router.get("/home", homeController.getHomeData);

//REQUEST ROUTES//
router.get("/requests", requests.list);
router.post("/requests/create", requests.create);
router.put("/requests/:id/approve", requests.approve);
router.put("/requests/:id/denied", requests.denied);
router.put("/requests/:id/cancel", requests.cancel);
router.get("/requests/approved", requests.listApproved);
router.get("/requests/pending", requests.listPending);

//USERS ROUTES//
router.post('/register', users.create);
router.post("/login", users.login);
router.post("/logout", users.logout);
router.get("/profile", users.viewProfile);
router.get("/users", users.listAllUsers);

module.exports = router;