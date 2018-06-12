var express = require('express')
var router = express.Router()
var con = require('../con')
var parse = require('../parse')

router.get('/user', (req, res) => {
	con.query('SELECT * FROM user', (err, result) => {
		console.log(parse(result))
		res.send(parse(result))
	})
})

router.get('/user/:email', (req, res) => {
	con.query(`SELECT * FROM user WHERE email = "${req.params.email}"`, (err, result) => {
		res.send(result)
	})
})

router.post('/register', (req, res) => {
	var { email, username, password } = req.body
	var sql = `INSERT INTO user VALUES ("${email}","${username}","${password}")`
	con.query(sql, (err, result) => {
		if (err) throw err
		console.log('1 record inserted')
		res.send('registered!')
	})
})

router.get('/:d', (req, res) => {
	res.send(req.params.d)
})

module.exports = router
