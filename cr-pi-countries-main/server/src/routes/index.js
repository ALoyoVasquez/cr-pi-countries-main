const { Router } = require("express");
const countriesRouter = require("./countriesRouter")
const activityRouter = require("./activityRouter")

const mainRouter = Router();

mainRouter.use("/activities", activityRouter)
mainRouter.use("/countries", countriesRouter)

// router.get("/bulk", getApi); // Path /bulk //Crea Todos los Paises

module.exports = mainRouter;
