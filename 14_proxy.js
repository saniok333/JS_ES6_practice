const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `There is no field ${prop} in object`
    },

    set(target, prop, value) {
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        } else {
            console.log(`Length have to be more then 2 symbols. Now length is ${value.length} symbols`)
        }
    }
}

const form = {
    login: 'tester',
    password: '12345'
}

const formProxy = new Proxy(form, validator)

// formProxy.password = '12'

// console.log(formProxy.password)

function log(message) {
    console.log('[Log]: ', message)
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray) {
        if (argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        } else {
            console.log("Numser of arguments doesn't match")
        }
    }
})

proxy(2)
proxy(2, 3)