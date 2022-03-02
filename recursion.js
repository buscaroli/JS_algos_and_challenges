let myNums = [1, 3, 5, 7, 2, 4, 6]

const sum = (arr) => {
    if (arr.length < 1) return 0

    return arr[0] + sum(arr.slice(1))
}

console.log(sum(myNums))

const sum_tailCallOpt = (arr, acc = 0) => {
    if (arr.length < 1) return acc

    console.log(`Array: ${arr}, acc: ${acc}.`)
    return sum_tailCallOpt(arr.slice(1), arr[0] + acc)
}

console.log(myNums)
console.log('~~~~')
console.log(sum_tailCallOpt(myNums, 0))