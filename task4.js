// sort even asc odd desc

const arr = [4, 5, 3, 6, 7, 1, 2, 9, 8]

arr.sort((a, b) => {
    // if(a%2 - b%2 > 0) {
    //     return 1
    // } else if (a%2 - b%2 < 0) {
    //     return -1
    // } else if (a%2 - b%2 === 0) {
    //     if(a%2) {
    //         return b - a
    //     }
    // }

    // if(a%2 - b%2) {
    //     return a%2 - b%2
    // } else {
    //     if(a%2) {
    //         return b - a
    //     }
    //     return a - b
    // }

    a%2 - b%2 || a%2 ? a - b : b - a
})

console.log(arr)