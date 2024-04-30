
interface item {
    name: string
    price: number
}
// creating two objects
const book: item = {
    name: "ESSENTIAL TYPESCRIPT",
    price: 450
}
const copy: item = {
    name: "copy",
    price: 200
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`copy name: ${copy.name}, price: $${copy.price}`)