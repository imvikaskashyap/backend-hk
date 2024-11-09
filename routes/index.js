const express = require('express');
const adminRouter = require('./admin.routes');
const empRouter = require('./employee.routes');
const router = express.Router();

router.use("/admin", adminRouter)
router.use("/emp", empRouter)


module.exports = router