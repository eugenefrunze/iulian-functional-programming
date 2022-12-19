const someArr = [
    {name: 'Vasya', age: 13},
    {name: 'Kolya', age: 20},
    {name: 'Igor', age: 27},
    {name: 'Gogi', age: 50},
    {name: 'Adrian', age: 55}
]

const someSort = (key = 'name', asc = true) => {
    return someArr.sort((a, b) => {
        if (isNaN(a[key]) || isNaN(b[key])) {
            const elA = a[key].toLowerCase()
            const elB = b[key].toLowerCase()
            if (elA > elB) {
                return asc ? 1 : -1
            }
            if (elB > elA) {
                return asc ? -1 : 1
            }
            return 0
        }
        return asc ? a[key] - b[key] : b[key] - a[key]
    })
}

console.log(someSort('age', false))