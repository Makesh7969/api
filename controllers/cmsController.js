exports.users = async (req, res) => {
  try {
    const cmsService = require("../services/cmsServices");
    var cmsServiceInstance = new cmsService();
    var users = await cmsServiceInstance.getUsers(req.params.name);

    res.json({
      status: 200,
      data: {
        data: users.data,
      },
    });
  } catch (Exception) {
    console.log(Exception);
    res.json({
      staus: "failed",
      reason: Exception,
    });
  }
};
