var alphabetSoup = function(string) {
	var lettersArray = []
	var alphabetized = ''
	for (var i = 0; i < string.length; i++) {
		lettersArray.push(string[i])
	}
	console.log("alphabetized:", alphabetized)
	console.log("lettersArray:", lettersArray)
	alphabetized = lettersArray.sort().join('')
	
	console.log(alphabetized)
	return alphabetized
}
alphabetSoup("zxvczabcde")