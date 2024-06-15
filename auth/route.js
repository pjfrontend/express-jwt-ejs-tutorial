const express = require("express");
const router = express.Router();
const {
  register,
  login,
  update,
  deleteUser,
  getUsers,
  createAdminUser,
} = require("./auth");
const { adminAuth } = require("../middleware/auth");

// admin routes
router.route("/update").put(adminAuth, update);
router.route("/delete-user").delete(adminAuth, deleteUser);

// basic routes
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/get-users").get(getUsers);
router.route("/create-admin").get(createAdminUser);

module.exports = router;
