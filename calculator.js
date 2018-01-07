function addition(x,y){
	return (x+y)
}

function subtraction(x,y){
	return (x-y)
}

function multiplication(x,y):{
	return (x*y)
}

function division(x,y):{
	return (x/y)
}

function square(x):{
	return (x ** 2)
}

function cube(x):{
	return (x ** 3)
}

function square_n_times(x,y):{
	return (x ** y)
}

console.log("I will use the calculator to add 333 to 777, then divide that result by 10")
var a = addition(333,777)
var b = division(a,10)

console.log(a)
console.log(b)

console.log("I will use the calculator to square 10, and to cube 5")

var c = square(10)
var d = cube(5)

console.log(c)
console.log(d)

console.log("I will use the calculator to square 5 seven times")

var e = square_n_times(5,7)
console.log(e)