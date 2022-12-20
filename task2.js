const arr = [2, 3, 7, 10]

// 1. implement map with reduce

Array.prototype.mapReplacer = function(callback) {
    return this.reduce((acc, curr) => {
        return acc.concat(callback(curr))
    }, [])
}

const secArr = arr.mapReplacer(el => el + 2)

// console.log(secArr)

// 2. implement filter

Array.prototype.filterReplacer = function (callback) {
    return this.reduce((acc, curr) => {
        if(callback(curr)) {
            return acc.concat(curr)
        } else {
            return acc.concat([])
        }
        
    }, [])
}

const theirdArr = arr.filterReplacer((el) => el > 3)

console.log(theirdArr)

// 3. implement