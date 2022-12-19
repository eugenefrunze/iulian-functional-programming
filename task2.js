const mapReducer = (arr) => {
    const arrRet = []
    arr.reduce((acc, current) => {
        arr.push((current) => {
            return current + 1
        })
    })
    return arrRet
}


console.log(mapReducer([4, 2, 5]))