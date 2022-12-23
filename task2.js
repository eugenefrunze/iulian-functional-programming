const arr = [2, 3, 7, 10];
// console.log(arr.slice(1))
// const some = arr.splice(-1)
// console.log('arr', arr)
// console.log('some', some)
// const other = arr.slice(0, 1)
// console.log(other)

// 1. implement map with reduce

// Array.prototype.mapReplacer = function(callback) {
//     return this.reduce((acc, curr) => {
//         return acc.concat(callback(curr))
//     }, [])
// }

// const secArr = arr.mapReplacer(el => el + 2)

// console.log(secArr)

// 2. implement filter

Array.prototype.filterReplacer = function (callback) {
    return this.reduce((acc, curr) => {
        if(callback(curr)) acc.push(curr)
        return acc
    }, [])
}

const theirdArr = arr.filterReplacer((el) => el > 2)

// console.log(theirdArr)

// 3. implement every

Array.prototype.everyReplacer = function (callback) {
    return this.reduce((acc, curr) => {
        if(!callback(curr)) return false
        return true
    }, false)
}

// console.log(arr.everyReplacer(el => el <= 10))

// 4. implement some

Array.prototype.someReplacer = function (callback) {
    return this.reduce((acc, curr) => {
        return callback(curr)
    }, false)
}

// console.log(arr.someReplacer(el => el > 10))

// 5. implement find

// 5.1 method 1
Array.prototype.findReplacer = function (callback) {
    return this.reduce((acc, curr, idx, arr) => {
        if (callback(curr)) {
            if(acc) {
                console.log('pass', acc)
                return acc
            }
            return acc = curr
        }
        return acc
    }, undefined)
}

// 5.2 splice method
Array.prototype.findReplacer = function (callback) {
    return this.reduce((acc, curr, idx, arr) => {
        if (callback(curr)) {
            arr.splice(0)
            return acc=curr
        }
        return acc
    }, undefined)
}

// console.log('final', arr.findReplacer(el => el > 2))

// 6 replace imdexOf

Array.prototype.indexOfReplacer = function (value) {
    return this.reduce((acc, curr, idx, arr) => {
        if(curr === value) {
            arr.splice(0) 
            return idx
        }
        return acc
    }, -1)
}

// console.log(arr.indexOfReplacer(7))