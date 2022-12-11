let numbersArray = [10, 30, 0, -20, 99, 1000]
let stringsArray = ['hello', 'world', 'Glory', 'Ukraine', 'freedom']

// map
Array.prototype.simpleMap = function (fn) {
    let arr = this
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res[i] = fn(arr[i])
    }
    return res
}
console.log(numbersArray.simpleMap(e => e + 1))

// filter
Array.prototype.simpleFilter = function (fn) {
    let arr = this
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(numbersArray.simpleFilter(e => e < 55))

// find
Array.prototype.simpleFind = function (fn) {
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return arr[i]
        }
    }
}
console.log(numbersArray.simpleFind(e => e === 1000))

// forEach
Array.prototype.simpleForEach = function (fn){
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
    return undefined
}
console.log(numbersArray.simpleForEach(e => console.log(e + 1)))

// join
Array.prototype.simpleJoin = (arr, sep = ',') => {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        res = (arr.length - 1 > i) ? res += arr[i] + sep : res += arr[i]
    }
    return res
}




function abbrevName(name) {
    return name.split(" ").map(el => el[0].toUpperCase()).join(".")
}

/*console.log(abbrevName('arnold pucashino ss')) // A. P. S   */
/*console.log(students.sort((a, b) => a.name.localeCompare(b.name)))*/

// bubble sort

const nums = [10, 30, 60, 50, 11, 77, 3, 41, 11]

for (let j = 0; j < nums.length - 1; j++) {
    let isSort = true;
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSort = false;
            /*let temp = nums[i]    
            nums[i] = nums[i+1]
            nums[i+1] = temp*/
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSort) break
}



// 1

const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let minValue = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i]
    }
}
//console.log(minValue)

let maxValue = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i]
    }
}
//console.log(maxValue)




// 2
// factorial
function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}
//console.log(factorial(4)) // 120"



//fibonacci
const fib = (n) => {
    return n <= 1 ? n : fib(n-1) + fib(n-2)
}
//console.log(fib(22))


//sum of number
function sumTo(n) {
    return n === 1 ? 1 : n + sumTo(n - 1)
}
//console.log(sumTo(7))

