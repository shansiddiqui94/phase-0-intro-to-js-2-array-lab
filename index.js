// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
   const appendNewcat = [...cats, name]
   return appendNewcat
}

function prependCat(name){
    const prependNewcat = [name, ...cats]
    return prependNewcat
}

function removeLastCat(){
    let removeCopylastCat = cats.slice(0, cats.length-1)
    return removeCopylastCat
}

function removeFirstCat(){
    let removeCopyFirstCat = cats.slice(1)
    return removeCopyFirstCat
}



// const copyofCats = [...cats]
// copyofCats.push("Ralph")

