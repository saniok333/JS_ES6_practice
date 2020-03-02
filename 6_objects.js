const cityField = 'city'

const job = 'Frontend'

const person = {
    age: 26,
    name: 'Iryna',
    job: job,
    [cityField]: 'Saint-Peterburg',
    'country-live': 'Ukraine',
    print: () => 'Person',
    toString() {
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
}

// console.log(person)
// console.log(person.print())

//methods
const first = {
    a: 1
}
const second = {
    b: 2
}

// console.log(Object.is(20, 20))
const obj = Object.assign({}, first, {
    c: 2,
    d: 3
})
// console.log(obj)

console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))