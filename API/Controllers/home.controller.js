const Request = require("../models/request.model");
const User = require("../models/user.model");


module.exports.getHomeData = async (req, res, next) => {
  try {
    const pendingRequests = await Request.find({ status: "Pending" });
    const allUsers = await User.find({});
    res.status(200).json({ pendingRequests, allUsers });
  } catch (error) {
    console.error("Error en el controlador getHomeData:", error);
    next(error);
  }
};