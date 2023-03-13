const array1 = [5, 9, 1, 7, 6, 4]
const array2 = [66, 4, 3, 88, 51, 27]
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


// at()
console.log(`the indes is ${array1.at(1)}`)

// concat
console.log(array1.concat(array2))

// every
console.log(array1.every(num => num >= 1))

// fill
console.log(array1.fill(0, 1, 3))
// 0-->replace item
// 1-->start index
// 2-->end index

// filter
console.log(words.filter(p => p.length === 5))
const array3 = [5, 9, 1, 7, 6, 4]
console.log(array3.filter(num => num % 2 == 0))

// splice
var Months = ['Jan', 'Mar', 'April', 'May']
Months.splice(1, 0, 'Feb')
console.log(Months)
Months.splice(1, 3, 'DEC')
console.log(Months)

// push $ pop

const p = [5, 4, 3, 2, 1]
p.push(0)
console.log(p)
const po = [0, 1, 2, 3, 4, 5]
po.pop()
console.log(po)

// shift $ unshift
const s = [1, 2, 3, 4, 5]
s.shift()
console.log(s)
const us = [5, 4, 3, 2, 1]
us.unshift(7, 6)
console.log(us)