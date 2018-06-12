var express = require('express')
var router = express.Router()

router.get('/num/:num', (req, res, next) => {
	res.json({ result: req.params.num })
})

router.get('/add', (req, res, next) => {
	var { num1, num2 } = req.query
	var result = Number(num1) + Number(num2)
	res.json({ result: result })
})
router.get('/subtract', (req, res, next) => {
	var { num1, num2 } = req.query
	var result = Number(num1) - Number(num2)
	res.json({ result: result })
})
router.get('/multiply', (req, res, next) => {
	var { num1, num2 } = req.query
	var result = Number(num1) * Number(num2)
	res.json({ result: result })
})
router.get('/divide', (req, res, next) => {
	var { num1, num2 } = req.query
	var result = Number(num1) / Number(num2)
	res.json({ result: result })
})
module.exports = router
