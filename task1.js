const someArr = [
    {name: 'Vasya', age: 13},
    {name: 'Kolya', age: 20},
    {name: 'Igor', age: 27},
    {name: 'Gogi', age: 50},
    {name: 'Adrian', age: 55}
]

const someSort = (key = 'name', asc = true) => {
    return someArr.sort((a, b) => {
            if (a[key] > b[key]) {
                return asc ? 1 : -1
            }
            if (a[key] < b[key]) {
                return asc ? -1 : 1
            }
            return 0
    })
}

console.log(someSort('age', false))
