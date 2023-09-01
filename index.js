const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
 const newCats = [...cats, name]
 return newCats   
}
function prependCat(name) {
    const newNewCats = [name, ...cats]
    return newNewCats
}
function removeLastCat(name) {
    const newNewNewCats = [...cats]
    newNewNewCats.pop()
    return newNewNewCats
}
function removeFirstCat(name) {
    const newNewNewNewCats = [...cats]
    newNewNewNewCats.shift()
    return newNewNewNewCats
}
