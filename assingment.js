// problem-1
function cubeNumber(number) {
	if(typeof number !== 'number'){
		return "Please enter a number";
	}

	return number * number * number;
}
console.log(cubeNumber(3)); 


// problem 2
function matchFinder(string1, string2) {
	if(typeof string1 !== 'string' || typeof string2 !== 'string'){
		return  "Please enter a string ";
	}

	if(string1.indexOf(string2) !== -1){
		return true;
	}
	else{
		return false;
	}
}

// console.log(matchFinder("John Doe", "ohn"));



// problem 3
function sortMaker(arr) {
	const firstMaterial = arr[0];
	const secondMaterial = arr[1];

	if(firstMaterial < 0 || secondMaterial < 0) {
		return "Invalid Input";
	}

	let newArray = [];
	if(firstMaterial >= secondMaterial){
		newArray.push(firstMaterial, secondMaterial);
	}else{
		newArray.push(secondMaterial, firstMaterial);
	}

	if(firstMaterial === secondMaterial){
		return "equal";
	}
	return newArray;
}
// let array = [1, 2];
// console.log(sortMaker(array));



// problem 4
function findAddress(obj) {
	const street = obj.street || "__";
	const house = obj.house || "__";
	const society = obj.society || "__";

	const result = street + "," + house + "," + society;
	return result;
}
// const obj = {
// 	street: 10,
// 	house: "15A",
// 	society: "Earth Perfect"
// }
// console.log(findAddress(obj));



// problem 5
function canPay(changeArray, totalDue) {
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
// let array = [1, 5, 5];
// console.log(canPay(array, 10));