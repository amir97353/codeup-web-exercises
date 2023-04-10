const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// console.log (users[0])

let threelangs =users.filter(user =>
    user.languages.length >= 3)


// console.log(stuff)

let email = users.map(user => user.email)
// console.log(email)


const totalId = users.reduce((total, user) => {

    return total + user.yearsOfExperience;
}, 0);

console.log(totalId)

average = totalId/ users.length
// console.log(average)

let mail = users.map(user => {
    return user.email.split('')
})

// console.log(mail)
// mail.forEach(email => {
//     console.log(email.split(" ,"))
// })

let longestemail = mail.reduce((acc, curr) => {
    if(acc.length > curr.length) {
        return acc
    }else {
        return curr
    }
}, '');

// console.log(longestemail.join(''))


let instructors = users.reduce((string,user) => {
    string += user.name + " ,"
    return string
},'')