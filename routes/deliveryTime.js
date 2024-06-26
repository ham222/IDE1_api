var express = require("express")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send({
		min_time: "5",
		max_time: "7",
	})
})

router.get("/:start-:end", function (req, res, next) {
	res.send({
		min_time: req.params.start,
		max_time: req.params.end,
	})
})

module.exports = router
