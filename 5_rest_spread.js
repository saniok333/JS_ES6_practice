function average(...arr) {
    return arr.reduce((acc, i) => acc += i) / arr.length
}

// console.log(average(10, 20, 30, 40))

//spread
// const array = [1, 2, 3, 5, 8, 13]
// console.log(...array)
// console.log(Math.max(...array))
// console.log(Math.max.apply(null, array))

// const fib = [1, ...array]
// console.log(fib)

//destructuring
const array = [1, , 3, 5, 8, 13]

// const a = array[0]
// const b = array[1]
// const [a, b = 42, ...c] = array
// console.log(a, b, c)

// const [a, , c] = array
// console.log(a, c)

//object
const address = {
    country: 'Ukraine',
    city: 'Vinnitsa',
    street: 'Soborna',
    concat: function () {
        return `${this.country} ${this.city} ${this.street}`
    }
}

// const {
//     city,
//     country,
//     street = 'Pyrogova',
//     concat: addressConcat
// } = address

// console.log(addressConcat.call(address))
// console.log(street)

// const {
//     city,
//     ...rest
// } = address

// console.log(city)
// console.log(rest)

const newAddress = {
    ...address,
    street: 'Yunosti',
    code: 1234
}
console.log(newAddress)