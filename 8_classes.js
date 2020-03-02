class Person {


    constructor(name) {
        this.name = name
        this.taype = 'hum'

    }

    greet() {
        console.log(this.name + ' says hi!')
    }
}

const max = new Person('Max')
// max.greet()
// console.log(max.taype)

// console.log(max.__proto__ === Person.prototype)

class Programmer extends Person {
    constructor(name, job) {
        super(name)

        this._job = job
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        if (job.length < 2) {
            throw new Error('Validation failed')
        }
        this._job = job
    }

    greet() {
        super.greet()
        console.log('Pteross')
    }
}

const frontend = new Programmer('Filin', 'valenok')
// console.log(frontend)
// frontend.greet()
// console.log(frontend.job)
frontend.job = '123'
// console.log(frontend.job)

class Util {
    static average(...args) {
        return args.reduce((acc, i) => acc += i, 0) / args.length
    }
}

// const util = new Util()
const res = Util.average(1, 1, 2, 3, 5, 8, 13)

console.log(res)