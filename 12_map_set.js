const map = new Map(
    [
        ['a', 1]
    ]
)

console.log(map.get('a'))
map.set('b', 2).set(NaN, 'Number').set(42, 'demo')
console.log(map.get(NaN))
// map.clear()
console.log(map.has(42))