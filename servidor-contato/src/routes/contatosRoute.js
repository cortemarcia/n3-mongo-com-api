const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", controller.add)
router.get("/nome/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.delete("/delete/:nome", controller.deletar)
router.patch("/update/:id",controller.patchById)

module.exports = router
