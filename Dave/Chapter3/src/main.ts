let stringArr=["one", "Hey", "Sameer"]

let guitars = ['strat', 'les paul', 5150]

let mixedData =['EVH', 1999, true]

// stringArr[0]= 42 emits error
stringArr.push("shaik")

guitars[0]=1998
guitars.unshift("wow")
// guitars.push(true) emits error

// stringArr =guitars Type '(string | number)[]' is not assignable to type 'string[]'.
guitars=stringArr
mixedData = guitars

let test = []

let bands: string[]=[]
bands.push('van halen')

// length of the Array or the order of the types in the array does not matter to typescript it just knows what types belong in the array 
// if we want to be strict with the length of the array and the order of the types in the array in a specific position then we need to create a Tuple

// Tuple
let myTuple:[string, number, boolean] =['Dave', 42, true]

let mixed = ['john',1,false]

// myTuple = mixed Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'. Target requires 3 element(s) but source may have fewer.

mixed = myTuple

// myTuple[3]=45 Type '45' is not assignable to type 'undefined'.
myTuple[1]=40

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)

myObj=bands

myObj={}

const exampleObj