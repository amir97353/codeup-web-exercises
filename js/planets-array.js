let planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];

console.log(planets)
planets.unshift('Sun')
console.log(planets)

planets.push('pluto')
console.log(planets)

planets.shift('Sun')
console.log(planets)

planets.pop('pluto')
console.log(planets)

Earth = planets.indexOf('Earth')
console.log(Earth)

planets.reverse()
console.log(planets)

planets.sort()
console.log(planets)
