export function stringUtil(string) {
    if (typeof string !== "string") throw new Error("Nem stringet adtál meg te kula")
    return string.length
}

export function stringUtil2(string) {
    if (typeof string !== "string") throw new Error("Nem stringet adtál meg te kula")
    return string[0].toUpperCase() + string.slice(1)
}

export function wordUtil(...asd) {
    let arr = []
    for (let word of asd) {
        arr.push(stringUtil2(word))
    }
    return arr
}