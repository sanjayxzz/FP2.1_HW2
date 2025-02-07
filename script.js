//1//
const nums = [12, 5, 20, 7, 8, 15, 30];

const evenNumbers = nums.filter(num => num %2 === 0)
console.log(evenNumbers)

//2//
const words = ["kiwi", "mango", "apple", "orange", "banana"];

const longWords = words.filter(word => word.length > 5)
console.log(longWords)


//3//
const words1 = ["Sun", "Moon", "Star", "Planet", "Saturn"];

const wordsWithS = words.filter(word => word.startsWith('s'))
console.log(wordsWithS)

//4//
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notThreeMultiples = threeMultiples.filter(num => num %3 !== 0 )
console.log(notThreeMultiples)


//5//
const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const divisibleWith7and3 = numbs.filter(num => num %7 === 0 && num%3 === 0)
console.log(divisibleWith7and3)

//6//
const words2 = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];

const lowercaseWords = words2.filter( word =>word === word.toLowerCase())
console.log(lowercaseWords)

//7//
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];


const filteredWords = wordsY.filter(word =>!word.includes('a')) 
console.log(filteredWords)

//8//
const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiples = numsOnetoTen.filter(num => num %2 === 0 || num % 3 === 0 )
console.log(multiples)

//9//
const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];

const filteredFeelingWords = feelingWords.filter(word => word.includes('y') || word.includes('a'))
console.log(filteredFeelingWords)

//10//
const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];

const filteredNums = newNums.filter(num => num >= 20 && num <= 40)
console.log(filteredNums)



