var express = require("express")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send({
		price: "39",
	})
})

router.get("/:price", function (req, res, next) {
	res.send({
		price: req.params.price,
	})
})

module.exports = router
