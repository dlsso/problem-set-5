var alphabetSoup = function(string) {
	var lettersArray = []
	var alphabetized = ''
	for (var i = 0; i < string.length; i++) {
		lettersArray.push(string[i])
	}
	alphabetized = lettersArray.sort().join('')
	console.log("alphabetSoup('zxvczabcde')")
	console.log(alphabetized)
	return alphabetized
}
alphabetSoup("zxvczabcde")

var vowelCount = function(string) {
	var vowelCounter = 0
	vowels = { a:0, e:0, i:0, o:0, u:0}
	for (var i = 0; i < string.length; i++) {
		if(string[i].toLowerCase() in vowels){
			vowelCounter++
		}
	}
	console.log('vowelCount("All cows eat grass")')
	console.log(vowelCounter)
	return vowelCounter
}
vowelCount("All cows eat grass")