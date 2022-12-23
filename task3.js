const srcObj = {
    name: 'Josh',
    age: 25,
    gender: 'male',
    pockets: {
        cigaretes: 20,
        money: 200,
        keys: 2,
        cards: {
            visa: true,
            masterCard: false,
            mir: false
        }
    }
}

// loop

const objectClone = obj => {
    let copy = {}
    for(const field in obj){
        copy[field] = typeof(obj[field]) === 'object' ? objectClone(obj[field]) : obj[field]
    }
    return copy
}

const targetObj = objectClone(srcObj)

targetObj.age = 42
targetObj.pockets.cigaretes = 50
targetObj.pockets.cards.visa = false

console.log('src obj: ', srcObj)
console.log('other obj: ', targetObj)
