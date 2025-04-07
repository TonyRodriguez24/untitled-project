export function titleize(str) {
    let arr = str.trim().split(' ')
    const newArr = arr.map(letter => letter[0].toUpperCase() + letter.slice(1).toLowerCase())
    return newArr.join(' ')
}


