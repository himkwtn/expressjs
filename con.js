var mysql = require('mysql')

var con = mysql.createConnection({
	host: 'den1.mysql6.gear.host',
	user: 'learningsql',
	password: 'Ca5aU5?vTq!l',
	database: 'learningsql'
})

con.connect()

module.exports = con
