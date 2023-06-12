const casesRouter = require("express").Router({mergeParams: true})
const {
    addNewCase,
    updateCase,
    deleteCase,
    getCases,
    getOneCase
} = require("../controller/casesController")


casesRouter.post("/", addNewCase)
casesRouter.put("/:id", updateCase)
casesRouter.delete("/:id", deleteCase)
casesRouter.get("/:id", getOneCase)
casesRouter.get("/", getCases)

module.exports = casesRouter
