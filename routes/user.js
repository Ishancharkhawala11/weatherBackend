const express = require("express");
const {
  HandleAllUser,
  GetUserById,
  UpdateUserById,
  DeleteUserById,
  CreateUser,
} = require("../controllers/user");
const router = express.Router();
// router.route("/").get(HandleAllUser).post(CreateUser);
router.get("/",HandleAllUser)
  // router.get("/users",async (req, res) => {
  //   const allDbUsers=await User.find({})
  //   const html = `
  //     <ul>
  //      ${allDbUsers.map((user) => `<li>${user.firstName}-${user.email}</li>`)}
  //     </ul>`;
  //   res.send(html);
  // });
router.route("/:id")
  .get(GetUserById)
  .patch(UpdateUserById)
  .delete(DeleteUserById);

router.post("/",  CreateUser);
module.exports = router;
