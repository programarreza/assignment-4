// problem-1
/* function cubeNumber(number) {
	if(typeof number !== 'number'){
		return "Please enter a number";
	}

	return number * number * number;
}
console.log(cubeNumber(4));  */


// problem 2
// function matchFinder(string1, string2) {
// 	if(typeof string1 !== 'string' || typeof string2 !== 'string'){
// 		return  "Please enter a string ";
// 	}

// 	if(string1.indexOf(string2) !== -1){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }
// console.log(matchFinder("John Doe", "ohn"));



// problem 3
/* function sortMaker(arr) {
	if(number1 < 0 || number2 < 0){
		return "Invalid Input";
	}

	let newArray = [];
	if(number1 >= number2){
		newArray.push(number1, number2);
	}else{
		newArray.push(number2, number1);
	}
	if(number1 === number2){
		return "equal";
	}
	return newArray;
}
let array = [2, 3];
const number1 = array[0];
const number2 = array[1];
console.log(sortMaker(array)); */



// problem 4
/* function findAddress(obj) {
	const house = obj.house || "__";
	const street = obj.street || "__";
	const society = obj.society || "__";

	const result = street + "," + house + "," + society;
	return result;
}
const obj = {
	street: 10,
	house: "15A",
	society: "Earth Perfect"
}
console.log(findAddress(obj)); */



// problem 5
/* function canPay(changeArray, totalDue) {
	if(changeArray.length === 0) {
		return "Please provide a number";
	}
	let sum = 0;
	for(let i = 0; i < changeArray.length; i++) {
		sum += changeArray[i];
	}
	if(sum >=  totalDue){
		return true;
	}else{
		return false;
	}
}
let array = [1, 5, 5];
console.log(canPay(array, 10)); */