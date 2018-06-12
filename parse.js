var parse = input => {
	var res = []
	input.forEach(element => {
		res.push(JSON.parse(JSON.stringify(element)))
	})
	return res
}

module.exports = parse
