var zz = require('./zigzag.js');
const secret =
	"CYtZBsWZaZliYZocWLZlXuZZYWYeYXZsXeZXtXWpXeRYYYd!ZnYeWXoYXasnX,WXWrWPoAdWesnciGenWr"
let zigzagRow = 4
let maxCount = 10
let whatIsIt = []

function removeSomeStr(input, countLimit) {
	let strToCut = input
	let temp = strToCut.length
	let secretChar = [
		//{'char':'A', 'count':0}
	]
	while (temp--) {
		let findStr = secretChar.find((ele) => ele.char == strToCut[temp])
		if (findStr === undefined) {
			secretChar.push({
				char: strToCut[temp],
				count: 1,
			})
		} else {
			findStr.count++
		}
	}

	let removeChar = secretChar
		.filter((ele) => ele.count >= countLimit)
		.map((ele) => ele.char)
	removeChar.forEach((ele) => {
		strToCut = strToCut.replaceAll(ele, "")
	})

	return strToCut
}

// for (i = 0; i < zigzagRound; i++) {
// console.log(convert(removeSomeStr(secret,maxCount),i));
// }
let removedSomeStred = removeSomeStr(secret, 10)

console.log(zz.decodeRailFenceCipher(removedSomeStred,4));
