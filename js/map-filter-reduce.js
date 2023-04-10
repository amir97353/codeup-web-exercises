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

let stuff =users.filter(user => {
    if( user.languages[2] = true){
        return user
    }
})

// console.log(stuff)

let email = users.map(user => {
    // console.log([user.email])
})
// console.log(email)


const totalId = users.reduce((total, user) => {

    return total + user.id;
}, 0);

// console.log(totalId)

average = totalId/ users.length
// console.log(average)

 let mail = users.forEach(user => {
     return user.email

 })
mail.reduce((acc, curr) => {
    if(acc.length > curr.length) {
        console.log(acc)
    }else {
        return curr
    }
}, '');

