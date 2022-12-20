// 1. implement map with reduce

const arr = [2, 3, 7, 10]

const mapReplacer = (arr, callback) => {
  let resArr = []
  arr.reduce((prev, curr) => {
    resArr.push(callback(curr))
  }, 0)
  return resArr
}

console.log(mapReplacer(arr, (val) => val + 2))